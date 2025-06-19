const express = require("express");
const cors = require("cors");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    message: "SEO Analyzer API is running",
    timestamp: new Date().toISOString(),
  });
});

// SEO Analysis Functions
async function fetchWebsite(url) {
  try {
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch website: ${error.message}`);
  }
}

function analyzeSEO(html, url) {
  const $ = cheerio.load(html);
  const analysis = {
    score: 0,
    checks: {},
    recommendations: [],
  };

  // Title Analysis
  const title = $("title").text().trim();
  analysis.checks.title = {
    exists: !!title,
    length: title.length,
    optimal: title.length >= 30 && title.length <= 60,
  };

  // Meta Description Analysis
  const metaDescription = $('meta[name="description"]').attr("content");
  analysis.checks.metaDescription = {
    exists: !!metaDescription,
    length: metaDescription ? metaDescription.length : 0,
    optimal:
      metaDescription &&
      metaDescription.length >= 120 &&
      metaDescription.length <= 160,
  };

  // Headings Analysis
  const h1Tags = $("h1");
  const h2Tags = $("h2");
  const h3Tags = $("h3");
  analysis.checks.headings = {
    h1Count: h1Tags.length,
    h2Count: h2Tags.length,
    h3Count: h3Tags.length,
    hasH1: h1Tags.length > 0,
    multipleH1: h1Tags.length > 1,
  };

  // Images Analysis
  const images = $("img");
  const imagesWithAlt = images.filter((i, el) => $(el).attr("alt")).length;
  analysis.checks.images = {
    total: images.length,
    withAlt: imagesWithAlt,
    withoutAlt: images.length - imagesWithAlt,
    altPercentage:
      images.length > 0 ? (imagesWithAlt / images.length) * 100 : 100,
  };

  // Links Analysis
  const links = $("a[href]");
  const internalLinks = links.filter((i, el) => {
    const href = $(el).attr("href");
    return (
      href &&
      (href.startsWith("/") || href.includes(url.replace(/^https?:\/\//, "")))
    );
  }).length;
  const externalLinks = links.length - internalLinks;
  analysis.checks.links = {
    total: links.length,
    internal: internalLinks,
    external: externalLinks,
  };

  // Schema Markup
  const schemaScripts = $('script[type="application/ld+json"]');
  analysis.checks.schema = {
    exists: schemaScripts.length > 0,
    count: schemaScripts.length,
  };

  // Mobile Responsiveness (basic check)
  const viewport = $('meta[name="viewport"]');
  analysis.checks.mobile = {
    hasViewport: viewport.length > 0,
  };

  // Social Media Meta Tags
  const ogTags = $('meta[property^="og:"]');
  const twitterTags = $('meta[name^="twitter:"]');
  analysis.checks.social = {
    ogTags: ogTags.length,
    twitterTags: twitterTags.length,
    hasSocial: ogTags.length > 0 || twitterTags.length > 0,
  };

  // Calculate Score
  let score = 0;
  const maxScore = 100;

  // Title (15 points)
  if (analysis.checks.title.exists) score += 10;
  if (analysis.checks.title.optimal) score += 5;

  // Meta Description (15 points)
  if (analysis.checks.metaDescription.exists) score += 10;
  if (analysis.checks.metaDescription.optimal) score += 5;

  // Headings (15 points)
  if (analysis.checks.headings.hasH1) score += 10;
  if (!analysis.checks.headings.multipleH1) score += 5;

  // Images (15 points)
  if (analysis.checks.images.altPercentage >= 80) score += 15;
  else if (analysis.checks.images.altPercentage >= 50) score += 10;
  else if (analysis.checks.images.altPercentage > 0) score += 5;

  // Links (10 points)
  if (analysis.checks.links.internal > 0) score += 5;
  if (analysis.checks.links.external > 0) score += 5;

  // Schema Markup (10 points)
  if (analysis.checks.schema.exists) score += 10;

  // Mobile (10 points)
  if (analysis.checks.mobile.hasViewport) score += 10;

  // Social Media (10 points)
  if (analysis.checks.social.hasSocial) score += 10;

  analysis.score = Math.min(score, maxScore);

  // Generate Recommendations
  const recommendations = [];

  if (!analysis.checks.title.exists) {
    recommendations.push("Add a title tag to your page");
  } else if (!analysis.checks.title.optimal) {
    recommendations.push("Optimize your title tag length (30-60 characters)");
  }

  if (!analysis.checks.metaDescription.exists) {
    recommendations.push(
      "Add a meta description to improve search result snippets"
    );
  } else if (!analysis.checks.metaDescription.optimal) {
    recommendations.push(
      "Optimize your meta description length (120-160 characters)"
    );
  }

  if (!analysis.checks.headings.hasH1) {
    recommendations.push("Add an H1 heading to your page");
  } else if (analysis.checks.headings.multipleH1) {
    recommendations.push("Use only one H1 heading per page");
  }

  if (analysis.checks.images.altPercentage < 80) {
    recommendations.push(
      "Add alt text to all images for better accessibility and SEO"
    );
  }

  if (analysis.checks.links.internal === 0) {
    recommendations.push(
      "Add internal links to improve site navigation and SEO"
    );
  }

  if (!analysis.checks.schema.exists) {
    recommendations.push(
      "Add structured data (schema markup) to improve search results"
    );
  }

  if (!analysis.checks.mobile.hasViewport) {
    recommendations.push("Add viewport meta tag for mobile responsiveness");
  }

  if (!analysis.checks.social.hasSocial) {
    recommendations.push(
      "Add Open Graph and Twitter Card meta tags for social media sharing"
    );
  }

  if (analysis.checks.links.external === 0) {
    recommendations.push(
      "Consider adding relevant external links to authoritative sources"
    );
  }

  analysis.recommendations = recommendations.slice(0, 5); // Limit to top 5 recommendations

  return analysis;
}

app.post("/api/analyze", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "Missing website URL" });
  }

  // Validate URL format
  try {
    new URL(url);
  } catch (error) {
    return res.status(400).json({ error: "Invalid URL format" });
  }

  try {
    console.log(`Analyzing website: ${url}`);

    // Fetch the website
    const html = await fetchWebsite(url);

    // Perform SEO analysis
    const analysis = analyzeSEO(html, url);

    console.log(`Analysis complete. Score: ${analysis.score}/100`);

    res.json({
      url,
      score: analysis.score,
      recommendations: analysis.recommendations,
      details: analysis.checks,
    });
  } catch (error) {
    console.error(`Error analyzing ${url}:`, error.message);
    res.status(500).json({
      error: "Failed to analyze website",
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`SEO Analyzer API running on port ${PORT}`);
});
