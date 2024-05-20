# Title: Ron Swanson Quotes

<p>Description: Here you can find all your favorite quotes by Ron Swanson from the TV show "Parks and Recreation". You will be able to get random quotes, save your favorite ones, and these beloved quotes will be displayed in a user friendly manner</p>

<p>Target Browser: This web app will be developed with Windows and MacOS operating systems in mind. The intended browser will be Google Chrome. Other browsers may or may not have issues.</p>

<a href="https://inst377-group-project-ant-n1.vercel.app/" target='_blank'>Go to Vercel site</a>

[Click here to go to the Developer Manual section](#developer-manual)

<hr>

<h2 id='developer-manual'>Developer Manual</h2>

<h4>Dependencies</h4>
<p>This project uses supabase, express, body-parser, and nodemon as dependencies.</p>
<p>Install using npm:</p>
<ul>
<li>'npm install @supabase/supabase-js'</li>
<li>'npm install express'</li>
<li>'npm install body-parser'</li>
<li>'npm install nodemon'</li>
</ul>
<p>Run the project using 'npm start'</p>

<hr>

<p>This project uses the this API to get the random quotes: <a href="https://github.com/jamesseanwright/ron-swanson-quotes?tab=readme-ov-file#ron-swanson-quotes-api" target='_blank'>https://github.com/jamesseanwright/ron-swanson-quotes?tab=readme-ov-file#ron-swanson-quotes-api</a></p>

<p>Quotes are saved to a supabase database which is served by an express backend.</p>

<p>The 2 express endpoints are:</p>
<ul>
<li>https://github.com/jamesseanwright/ron-swanson-quotes?tab=readme-ov-file#ron-swanson-quotes-api/savedQuotes</li>
<ul>This endpoint gives you the JSON containing the saved quotes.</ul>
<li>https://github.com/jamesseanwright/ron-swanson-quotes?tab=readme-ov-file#ron-swanson-quotes-api/postQuote</li>
<ul>This endpoint allows you to POST a quote into the database. "quote":<em>"(quote here)"</em> --- json format</ul>
</ul>
