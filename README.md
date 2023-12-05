# Marketing Technology: a study on compliance, acquisition and usage of first-party data in digital marketing
Projeto de formatura do aluno João Vitor Vargas Soares para conclusão do curso de Engenharia de Computação da Escola Politécnica da USP feito em inglês.

## Objectives

This is a project made from the student's internship experience in the double degree exchange program at the University of Grenoble INP in France. It involves adapting the End of Studies project undertaken at Procter & Gamble, with a specific emphasis on exploring the interplay between data analysis and digital marketing in the contemporary landscape marked by the enforcement of new digital marketing compliance regulations such as GDPR. The internship comprised two primary projects: the acquisition and activation of consumer first-party data, as well as the exploration of retail data and collaboration through the utilization of Amazon Marketing Cloud.

### Project 1: Consumer first-party data acquisition and media activation

The main objective of the initial project was to gather and leverage consumer first-party data for P&G's grooming brands, aligning with the company's fiscal year objectives. Data activation involves extracting value from data by generating insights and translating those insights into actionable measures. This discussion also encompasses changes in data collection methods and types in digital marketing, particularly addressing the impact of new data regulations currently in effect in Europe.

### Project 2: Retail data and collaboration using Amazon Marketing Cloud

The objective of the second project was to use the Amazon Marketing Cloud digital marketing platform for the collection and analysis of consumer data. The aim was to address Procter & Gamble's pre-established business inquiries, employing Python for data analysis. AMC serves as a cloud-based clean room housing details about sales and consumer engagement on Amazon's website, accessible through SQL queries.

## Conceptual Aspects

### Types of data used in digital marketing
Digital marketing utilizes three main types of data: First-Party Data (1PD), Second-Party Data (2PD), and Third-Party Data (3PD). First-Party Data is collected and owned by the company, providing accurate and precise insights into consumer behavior such as web and mobile app activity, purchase history, and interactions with the company. Second-Party Data involves the acquisition of First-Party Data from other companies, typically business partners. On the other hand, Third-Party Data comes from external sources and lacks the precision of the other types, offering a more general perspective on consumer interests, such as website visits and product preferences.

### General Data Protection Regulation in Europe
The General Data Protection Regulation, commonly known as GDPR, is an extensive data privacy law enacted in May 2018. It aims to safeguard individuals' personal data by instituting stringent regulations on data collection, processing, and storage, inside and outside the European Union. GDPR enforces penalties for non-compliance and empowers individuals with greater control over their personal information.

### First-Party data and cookies
According to Peters and Sikorski (1997), HTTP cookies are small data structures sent from a web server to a browser, stored on the hard drive as text files, containing character strings that hold specific information about the user. In contemporary terms, this translates to small text files placed by websites on a user's device, typically in the web browser, to monitor and store user information and online behavior. Such data serves various purposes like user authentication, personalization, and data analytics.

With the GDPR definitions in mind, the collection of third and second-party data becomes outdated. Major web browsers like Firefox, Google Chrome, and Safari are phasing out third-party cookies, aligning with the new regulations. To comply, companies are turning to First-Party Data collection, ensuring compliance through direct requests to consumers, such as the "Allow cookies" pop-up. Failure to adhere to these regulations may result in significant fines, reaching up to €20 million or 4% of global revenue, whichever is higher. Data subjects also retain the right to seek compensation for damages. While individual European Union countries may have specific rules, they all build upon the GDPR regulations as a foundation.

## Requirements Specification

### Project 1: Consumer first-party data acquisition and media activation

#### Functional Requirements

<ul>
  <li>The system has to authenticate with GCP’s BigQuery to access all databases</li>
  <li>The system has to query all the consumers inside the corporate database that are potential grooming consumers for three different brands: Gillette, Gillette King C, and Braun</li>
  <li>The system has to query all the traits inside the corporate database that could be related to grooming products</li>
  <li>The system has to query all the events inside the corporate database that could be related to grooming products</li>
  <li>The system has to query all the data sources inside the corporate database that could be related to grooming consumers</li>
  <li>The system has to analyze all data collected related to traits, consumers, events, and data sources to get insights based on the definition of a potential grooming consumer</li>
  <li>The system has to generate charts related to each analysis result</li>
  <li>The system has to do all the querying and analysis activity on five different corporate databases, divided by country (Italy, France, Germany, Spain, and United Kingdom) and marketing program number</li>
  <li>The system must only query consumers with age and gender information</li>
  <li>The system must not query duplicated consumers, traits, sources, nor events</li>
  <li>The system must not query consumers that are present on the grooming database</li>
  <li>The system must not query consumers that are not active in the past 12 months</li>
  <li>The system must only query consumers that have grooming golden traits</li>
  <li>The system must only query consumers that agreed with the email communication regulation defined by GDPR</li>
  <li>The user has to be able to input the country selected for analysis and get as output the data related to that country analyzed, in chart and table formats</li>
</ul>

#### Non-Functional Requirements

<ul>
  <li>The system has to use Python programming language to treat the collected data;</li>
  <li>The system has to use SQL to recover data from the relational databases provided;</li>
  <li>The system has to use Google Cloud Platform’s cloud services, such as databases and cloud computing environments;</li>
  <li>The system has to execute the analysis using Jupyter Notebooks and has to generate the reports directly from them;</li>
  <li>The connection with GCP’s databases has to be done internally, not being able to connect to external networks;</li>
  <li>All data management has to comply with GDPR’s regulations;</li>
  <li>The system has to be able to perform analysis for five different countries: Italy, France, Germany, Spain, and United Kingdom;</li>
  <li>The system has to be able to be reused for future analysis on different countries.</li>
</ul>

### Project 2: Retail data and collaboration using Amazon Marketing Cloud

#### Business Questions to Answer

On this project, the student was provided with a set of business inquiries by their supervisor, and consequently, all the analytical work conducted was predicated upon addressing these questions. The business questions were the following.
<ul>
  <li>What are the optimal advertisement’s campaign settings for frequency caps and day-parting for Amazon Display Ads?</li>
  <li>How do the different media vehicles, Display Ads, Search Ads, and SoV placements, work together?</li>
  <li>What are the different campaign paths in order of occurrence considering display and search advertisements?</li>
  <li>What is the time passed between the first and last impression/click made by a consumer on advertisements until they make a purchase?</li>
  <li>What consumer audiences are driving most sales? Are there any age-based differences in terms of what works best for conversions (purchases)?</li>
</ul>

#### Functional Requirements

<ul>
  <li>The system must query the Display Advertisements information to generate reports related to the day parting of them.</li>
  <li>The system has to define what is the optimal frequency cap for Display Advertisements in a period of a month;</li>
  <li>The system has to define what is the period of the day in which most of the sales related to a marketing campaign;</li>
  <li>The system must use the purchase rate, ROAS, number of impressions, and number of users as KPIs for evaluating what is the best frequency cap for Display Advertisements;</li>
  <li>The system must divide the result for frequency cap and day parting by the selected brands in analysis, Braun and Gillette;</li>
  <li>The system must generate charts related to day parting, dividing the results by the hour of the day;</li>
  <li>The system must generate charts for frequency caps comparing the number of users that have seen an advertisement, the number of times the advertisement has been seen by the same users, with the purchase and ROAS rate related to them;</li>
  <li>The system must analyze how the different types of media vehicles work together and separately;</li>
  <li>The system must compare the media vehicles analysis results using the following parameters: the number of impressions, the number of users that have purchased a product, the purchase amount for the campaign in Euros, the total cost of the advertisements, and the unique reach;</li>
  <li>The system must use ROAS and purchase rate as KPIs for the media vehicles analysis;</li>
  <li>The system must generate charts and tables with the results for the media vehicles analysis divided by the period of operation of the advertisement and by the brand in analysis;</li>
  <li>The system must compare the performance of the different media vehicles in peak periods and non-peak periods;</li>
  <li>The system must compare the different campaign paths that occur on Amazon’s website and generate tables with all the results;</li>
  <li>The system must analyze how the consumers interact with advertisements after their first impression until their last impression on a predefined period of time;</li>
  <li>The system must generate charts for the user impressions analysis using as a parameter the time passed after the impression, the purchases made up until that moment, and the actions made by the consumer related to that advertisement. All this must be done for each brand in analysis;</li>
  <li>The system must analyze what are the best-performing consumer audiences on Amazon for each brand in analysis and generate tables with this comparison on a predefined period of time;</li>
</ul>

#### Non-Functional Requirements

<ul>
  <li>The system has to use Python programming language to treat the collected data;</li>
  <li>The system has to use SQL to recover data from the relational databases provided on the Amazon Marketing Cloud website, generating Excel files with the results;</li>
  <li>The system has to use Jupyter Notebooks to treat the data and generate insights related to the business questions;</li>
  <li>The system has to use Google Cloud Platform’s cloud services for treating the data, specifically AI Vertex;</li>
  <li>The connection with GCP’s databases has to be done internally, not being able to connect to external networks;</li>
  <li>All data management has to comply with GDPR’s regulations;</li>
  <li>The analysis has to be adaptable to generate insights for other countries than the one in analysis, which is France.</li>
</ul>

