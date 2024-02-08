# CSVaulter: Dynamic, randomzied content synergy on a static-site budget

Ever wish you could run a dynamic, fast-moving media startup without any effort or budget? You can, with the power of **CSVaulter**, which will randomly update your static site page by replacing content based on the information in a CSV (comma seperated value, i.e., spreadsheet). Every time a visitor refreshes the page, they're giving a randomly selected experience, making it feel like your destination has its finger on the pulse of what's hot and always offering something new. Since there's no server required, you can even host your new media empire for free on GitHub Pages.

![image](https://github.com/morisy/quickrocks/assets/136939/771dae7f-0472-46f7-92e9-1cdfad284fd9)

## Step 1: Embrace the Chaos

First, ensure you have a CSV file filled with the tantalizing tidbits of data you want to dynamically display.

Sample CSV format:

```
variable-id,variable-title,variable-description,variable-image,variable-article-1-url,variable-article-1-headline
1,"Title 1","Description 1","https://example.com/image1.jpg","https://example.com/article1","Headline 1"
2,"Title 2","Description 2","https://example.com/image2.jpg","https://example.com/article2","Headline 2"
```

Upload this somewhere on the web.

## Step 2: Summon CSVaulter

Include CSVaulter (and Papa Parse) in your HTML. 

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Your Dynamic Site</title>
</head>
<body>
    <!-- Your content here -->

    <!-- Papa Parse for CSV parsing -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
    <!-- CSVaulter: The hero your website deserves -->
    <script src="path/to/CSVaulter.js" data-csv-url="path_to_your_csv_file.csv"></script>
</body>
</html>

```

## Step 3: Tag content for replacing

Use data-csv-replace attributes to earmark elements for dynamic content replacement. Ensure that the underlying content is something that will work as a fallback in case users have JavaScript disabled.

```
<h2 data-csv-replace="variable-title">Fallback Title</h2>
<p data-csv-replace="variable-description">Fallback Description</p>
<img data-csv-replace="variable-image" src="fallback-image.jpg" alt="Fallback Image">
<a data-csv-replace="variable-article-1-url" href="fallback-url.html">Fallback Link</a>
```

![image](https://github.com/morisy/quickrocks/assets/136939/52fa9acd-273d-4959-86d6-a67687bcef0e)

## Step 4: Watch the Magic Happen

Load your page, and watch as CSVaulter breathes life into your content. With each refresh, a new possibility unfolds. It's like your site is living its best life, thanks to you (and a little CSV magic). Note that due to cross-site scripting restrictions, this probably won't work locally unless you tweak you developer settings.

## Bonus: Advanced tips

Want to target a specific row based on whimsy or user interaction, or make it so that people can share specific iterations easily? Toss a #rowId at the end of your URL (e.g., `yourdomain.com/#2`) and watch CSVaulter fetch content from that specific row like a well-trained retriever.


![image](https://github.com/morisy/quickrocks/assets/136939/d56809da-d514-4fde-9ce3-641086ebf696)

![image](https://github.com/morisy/quickrocks/assets/136939/9831a43b-16a1-40c4-aff9-9307561623d0)
