# SEO Analyzer API

A comprehensive SEO analysis API that performs real-time website analysis and provides actionable recommendations.

## Features

- **Real-time website analysis** - Scrapes and analyzes actual websites
- **Comprehensive SEO checks** - 8 different SEO factors analyzed
- **Scoring system** - 0-100 score based on SEO best practices
- **Actionable recommendations** - Specific suggestions for improvement
- **Detailed breakdown** - Complete analysis results for each factor

## API Endpoints

### Health Check

```
GET /api/health
```

Returns server status and timestamp.

**Response:**

```json
{
  "status": "healthy",
  "message": "SEO Analyzer API is running",
  "timestamp": "2025-06-19T00:41:21.629Z"
}
```

### SEO Analysis

```
POST /api/analyze
```

**Request Body:**

```json
{
  "url": "https://example.com"
}
```

**Response:**

```json
{
  "url": "https://example.com",
  "score": 75,
  "recommendations": [
    "Optimize your title tag length (30-60 characters)",
    "Add alt text to all images for better accessibility and SEO"
  ],
  "details": {
    "title": {
      "exists": true,
      "length": 98,
      "optimal": false
    },
    "metaDescription": {
      "exists": true,
      "length": 142,
      "optimal": true
    },
    "headings": {
      "h1Count": 4,
      "h2Count": 11,
      "h3Count": 16,
      "hasH1": true,
      "multipleH1": true
    },
    "images": {
      "total": 54,
      "withAlt": 40,
      "withoutAlt": 14,
      "altPercentage": 74.07
    },
    "links": {
      "total": 136,
      "internal": 115,
      "external": 21
    },
    "schema": {
      "exists": false,
      "count": 0
    },
    "mobile": {
      "hasViewport": true
    },
    "social": {
      "ogTags": 7,
      "twitterTags": 5,
      "hasSocial": true
    }
  }
}
```

## SEO Analysis Factors

### 1. Title Tag (15 points)

- **Exists**: 10 points
- **Optimal length (30-60 characters)**: 5 points

### 2. Meta Description (15 points)

- **Exists**: 10 points
- **Optimal length (120-160 characters)**: 5 points

### 3. Headings (15 points)

- **Has H1**: 10 points
- **Single H1**: 5 points

### 4. Images (15 points)

- **80%+ with alt text**: 15 points
- **50%+ with alt text**: 10 points
- **Some with alt text**: 5 points

### 5. Links (10 points)

- **Internal links**: 5 points
- **External links**: 5 points

### 6. Schema Markup (10 points)

- **Exists**: 10 points

### 7. Mobile Responsiveness (10 points)

- **Viewport meta tag**: 10 points

### 8. Social Media (10 points)

- **Open Graph or Twitter tags**: 10 points

## Error Responses

### Invalid URL

```json
{
  "error": "Invalid URL format"
}
```

### Missing URL

```json
{
  "error": "Missing website URL"
}
```

### Analysis Failed

```json
{
  "error": "Failed to analyze website",
  "message": "Failed to fetch website: timeout"
}
```

## Testing with Postman

1. **Health Check:**

   - Method: `GET`
   - URL: `http://localhost:4000/api/health`

2. **SEO Analysis:**
   - Method: `POST`
   - URL: `http://localhost:4000/api/analyze`
   - Headers: `Content-Type: application/json`
   - Body (raw JSON):
   ```json
   {
     "url": "https://example.com"
   }
   ```

## Dependencies

- `express` - Web framework
- `cors` - Cross-origin resource sharing
- `axios` - HTTP client for fetching websites
- `cheerio` - HTML parsing and manipulation

## Running the API

```bash
cd api
npm install
npm start
```

The API will run on port 4000 by default, or use the `PORT` environment variable.
