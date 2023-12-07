# Marketing Technology: a study on compliance, acquisition and usage of first-party data in digital marketing

<div align="justify">
Projeto de formatura do aluno João Vitor Vargas Soares para conclusão do curso de Engenharia de Computação da Escola Politécnica da USP feito em inglês.
</div>

## Objectives

<div align="justify">
This is a project made from the student's internship experience in the double degree exchange program at the University of Grenoble INP in France. It involves adapting the End of Studies project undertaken at a consumers goods multinational, with a specific emphasis on exploring the interplay between data analysis and digital marketing in the contemporary landscape marked by the enforcement of new digital marketing compliance regulations such as GDPR. The internship comprised two primary projects: the acquisition and activation of consumer first-party data, as well as the exploration of retail data and collaboration through the utilization of Amazon Marketing Cloud.
</div>

### Project 1: Consumer first-party data acquisition and media activation

<div align="justify">
The main objective of the initial project was to gather and leverage consumer first-party data for company's grooming brands, aligning with the company's fiscal year objectives. Data activation involves extracting value from data by generating insights and translating those insights into actionable measures. This discussion also encompasses changes in data collection methods and types in digital marketing, particularly addressing the impact of new data regulations currently in effect in Europe.
</div>

### Project 2: Retail data and collaboration using Amazon Marketing Cloud

<div align="justify">
The objective of the second project was to use the Amazon Marketing Cloud digital marketing platform for the collection and analysis of consumer data. The aim was to address the company's pre-established business inquiries, employing Python for data analysis. AMC serves as a cloud-based clean room housing details about sales and consumer engagement on Amazon's website, accessible through SQL queries.
</div>

## Conceptual Aspects

### Types of data used in digital marketing

<div align="justify">
Digital marketing utilizes three main types of data: First-Party Data (1PD), Second-Party Data (2PD), and Third-Party Data (3PD). First-Party Data is collected and owned by the company, providing accurate and precise insights into consumer behavior such as web and mobile app activity, purchase history, and interactions with the company. Second-Party Data involves the acquisition of First-Party Data from other companies, typically business partners. On the other hand, Third-Party Data comes from external sources and lacks the precision of the other types, offering a more general perspective on consumer interests, such as website visits and product preferences.
</div>

### General Data Protection Regulation in Europe

<div align="justify">
The General Data Protection Regulation, commonly known as GDPR, is an extensive data privacy law enacted in May 2018. It aims to safeguard individuals' personal data by instituting stringent regulations on data collection, processing, and storage, inside and outside the European Union. GDPR enforces penalties for non-compliance and empowers individuals with greater control over their personal information.
</div>

### First-Party data and cookies

<div align="justify">
According to Peters and Sikorski (1997), HTTP cookies are small data structures sent from a web server to a browser, stored on the hard drive as text files, containing character strings that hold specific information about the user. In contemporary terms, this translates to small text files placed by websites on a user's device, typically in the web browser, to monitor and store user information and online behavior. Such data serves various purposes like user authentication, personalization, and data analytics.

With the GDPR definitions in mind, the collection of third and second-party data becomes outdated. Major web browsers like Firefox, Google Chrome, and Safari are phasing out third-party cookies, aligning with the new regulations. To comply, companies are turning to First-Party Data collection, ensuring compliance through direct requests to consumers, such as the "Allow cookies" pop-up. Failure to adhere to these regulations may result in significant fines, reaching up to €20 million or 4% of global revenue, whichever is higher. Data subjects also retain the right to seek compensation for damages. While individual European Union countries may have specific rules, they all build upon the GDPR regulations as a foundation.
</div>

## Requirements Specification

### Project 1: Consumer first-party data acquisition and media activation

#### Functional Requirements

<div align="justify">
<ul>
  <li>The system has to authenticate with GCP’s BigQuery to access all databases</li>
  <li>The system has to query all the consumers inside the corporate database that are potential grooming consumers for three different grooming brands</li>
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
</div>

#### Non-Functional Requirements

<div align="justify">
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
</div>

### Project 2: Retail data and collaboration using Amazon Marketing Cloud

#### Business Questions to Answer

<div align="justify">
On this project, the student was provided with a set of business inquiries by their supervisor, and consequently, all the analytical work conducted was predicated upon addressing these questions. The business questions were the following.
<ul>
  <li>What are the optimal advertisement’s campaign settings for frequency caps and day-parting for Amazon Display Ads?</li>
  <li>How do the different media vehicles, Display Ads, Search Ads, and SoV placements, work together?</li>
  <li>What are the different campaign paths in order of occurrence considering display and search advertisements?</li>
  <li>What is the time passed between the first and last impression/click made by a consumer on advertisements until they make a purchase?</li>
  <li>What consumer audiences are driving most sales? Are there any age-based differences in terms of what works best for conversions (purchases)?</li>
</ul>
</div>

#### Functional Requirements

<div align="justify">
<ul>
  <li>The system must query the Display Advertisements information to generate reports related to the day parting of them.</li>
  <li>The system has to define what is the optimal frequency cap for Display Advertisements in a period of a month;</li>
  <li>The system has to define what is the period of the day in which most of the sales related to a marketing campaign;</li>
  <li>The system must use the purchase rate, ROAS, number of impressions, and number of users as KPIs for evaluating what is the best frequency cap for Display Advertisements;</li>
  <li>The system must divide the result for frequency cap and day parting by the selected grooming brands in analysis;</li>
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
</div>

#### Non-Functional Requirements

<div align="justify">
<ul>
  <li>The system has to use Python programming language to treat the collected data;</li>
  <li>The system has to use SQL to recover data from the relational databases provided on the Amazon Marketing Cloud website, generating Excel files with the results;</li>
  <li>The system has to use Jupyter Notebooks to treat the data and generate insights related to the business questions;</li>
  <li>The system has to use Google Cloud Platform’s cloud services for treating the data, specifically AI Vertex;</li>
  <li>The connection with GCP’s databases has to be done internally, not being able to connect to external networks;</li>
  <li>All data management has to comply with GDPR’s regulations;</li>
  <li>The analysis has to be adaptable to generate insights for other countries than the one in analysis, which is France.</li>
</ul>
</div>

## Implementation and Results

### Project 1: Consumer first-party data acquisition and media activation

<div align="justify">
The main objective of this project was to find on the Growing Families database consumers that could be potential grooming product buyers. These consumers must comply to some contrains defined on the system requirements. To find these consumers, some queries were constructed and the final result was displayed on a table for all five countries in analysis.
</div>

#### Selecting Marketing Program Numbers

<div align="justify">
This analysis encompassed five distinct countries: Italy, France, Germany, Spain, and the United Kingdom. Each country is associated with its unique Marketing Program Number (MPN) within the corporate database, known as the Growing Families database, and for the Grooming brands. An MPN is an exclusive identifier assigned to a marketing plan devised by the company, encompassing all endeavors aimed at boosting sales for a specific brand or a group of brands, categorized by country. Each of the selected grooming brands possess its dedicated MPN corresponding to the country under examination. To retrieve the necessary Marketing Program Numbers, a query was directly executed from BigQuery’s interface.
</div>

#### Queries Constrains

<div align="justify">
To ensure compliance with system requirements mandating gender and age information for all consumers, the verification process must be integrated into the queries. The database contains various potential gender values. Therefore, before selecting consumers based on this data, it is crucial to identify and consolidate all available gender values within the database. Consequently, the only acceptable values for gender become 'm' or 'f'.

Another constrain defined on the system requirements is that a consumer must be active on the past 12 months. To select the active consumers, the events that the consumer participates that are not considered as active need to be defined. Then, the last time the consumer has been active needs to be verified on all tables related to events. After that, the events considered as not active were excluded from this verification, resulting on a list of userId’s that are active on the past 12 months.

The next constrain is regarding the email marketing communications. The consumers that have agreed to receive email marketing communications need to be selected by verifying the database column that contains that information.

One final constrain needs to be added to the analysis, which is related to the analysis done in Italy. In Italy, the databases have been through a cleaning regarding GDPR’s regulations, which is related to the consent given by the user to allow the usage of their data. This information is on a column present on the database, which needs to be verified on all Italian databases analysis.
</div>

#### Queries Created

##### Consumer traits query

<div align="justify">
The first query created had the intent of looking for consumer traits that have grooming related terms on its name. A consumer trait is an user attribute such as name, gender, city, but also computed traits, like the answers of a survey. Regular expression functions were used to search for grooming related traits. The grooming traits and all the unique userId’s related to them that are present on the Growing Families database were selected. After selecting them, there was an exclusion of: the userId’s that were present on any of the grooming databases; the traits that have less then 10000 userId’s associated to them. Finally, all the constrains mentioned before were applied to get the final results containing the number of unique consumers related to each consumer trait.
</div>

##### Consumer sources query

<div align="justify">
The next query created was regarding the sources from where the consumer data has come from. The first thing done was getting a list of all of the sources of information available. With the sources selected, the next step is to select the ones that are related to grooming and get all of the consumers that have them as a source. To verify if the source is grooming related, regular expresions were used on the description and name of the source by verifying if there were any grooming terms on them. As it was done for the traits query, the constrains defined before were also applied to get the final result containing the number of userId's for each source.
</div>

##### Consumer events query

<div align="justify">
The events query was done based on the events selected as meaningful for grooming brands. User events are user activity (clicks, views, orders) on a touchpoint. All of the selected consumers are unique, meaning that their userId appears only once at the results of the analysis. The events selected on the queries were: email events, coupon events, receipt events and cashback events. After selecting all consumers related to these events, the contrains defined before were applied resulting on a list of events and the number of unique consumers that are related to those events. 
</div>

##### All consumers query

<div align="justify">
The query includes the merge of all of the sources, traits and events SQL queries, as well as the constrains that were defined, resulting on a final number of unique users that could be potential grooming consumers. For the final number of users, the only events that were not considered were the ones related to email events, which was a decision that was made in discussion with the company's ecommerce team.
</div>

#### Results

<div align="justify">
In this section, only the results containing the total number of potential grooming consumers by country will be discussed. The results related to the other queries are available at the full paper that will be published by the student, in which the results are divided by traits, events and sources analyzed separately.

The results for each country are shown on the table below. <i>Total Users</i> is the number of the users that have gender and age information and that are related to at least one grooming golden trait, event or source. <i>Opt-in users</i> are the <i>Total Users</i> with the restriction of having agreed to receiving email marketing communications. <i>Active users</i> are the <i>Total Users</i> with the restriction of being active on the past 12 months. <i>Active and Opt-in Users</i> are the number of users with both restrictions. The percentage of Male and Female consumers with both restrictions is also quantified on the table below.
</div>

<div align="Center">
<table>
    <caption>Table 1 - Potential grooming consumers analysis results</caption>
    <tr>
        <td><b>Country</b></td>
        <td><b>Total Users</b></td>
        <td><b>Opt-in Users</b></td>
        <td><b>Active Users</b></td>
        <td><b>Active and Opt-in Users</b></td>
        <td><b>Active and Opt-in Female %</b></td>
        <td><b>Active and Opt-in Male %</b></td>
    </tr>
    <tr>
        <td>France</td>
        <td>119186</td>
        <td>88316</td>
        <td>80977</td>
        <td>66979</td>
        <td>94%</td>
        <td>6%</td>
    </tr>
    <tr>
        <td>Italy</td>
        <td>454006</td>
        <td>407995</td>
        <td>242937</td>
        <td>239469</td>
        <td>69%</td>
        <td>31%</td>
    </tr>
    <tr>
        <td>Spain</td>
        <td>456780</td>
        <td>305224</td>
        <td>250391</td>
        <td>202782</td>
        <td>91%</td>
        <td>9%</td>
    </tr>
    <tr>
        <td>Germany</td>
        <td>206550</td>
        <td>82771</td>
        <td>77083</td>
        <td>58705</td>
        <td>86%</td>
        <td>14%</td>
    </tr>
    <tr>
        <td>UK</td>
        <td>145965</td>
        <td>89591</td>
        <td>65589</td>
        <td>54906</td>
        <td>89%</td>
        <td>11%</td>
    </tr>
</table>
</div>

<div align="justify">
By examining the results of the analysis, it is possible to see that for all countries the major part of consumers are female, and that for most of them most of the consumers are active and accepted to be contacted by email marketing. This means that most of the consumers are considered potential grooming consumers, which is the main point of this analysis. Germany and Italy are the only countries that have less then half the total consumer as potential grooming consumers, meaning that their consumers are not as active as on the other countries and that most of them do not agree to be contacted via email marketing.
</div>

### Project 2: Retail data and collaboration using Amazon Marketing Cloud

<div align="justify">
The objective of this project was to analyze Amazon Marketing Cloud's consumer data to answer the business questions provided to the student. The implementation and results were divided in five topics, each one answering one of the questions. There were two grooming brands in analysis, which will be defined as GB1 (Grooming Brand 1) and GB2 (Grooming Brand 2) for legal reasons.
</div>

#### Frequency cap and day parting

<div align="justify">
The objective of this part of the analysis was to understand, for Display Advertisements, what is the division of advertisements displayed during the day (day parting) and what is the optimal frequency cap to be set for displaying them, in other words, how many advertisements they should be displayed to a consumer for each marketing campaign set up on a period of 30 days to get the best results in terms of purchases. This is important to know because Amazon charges their advertisements per impression and per clicks (how many times the advertisement was clicked), meaning that a maximum value of times an advertisement is displayed need to be set up so that the ratio between the money spent on a campaign and the return in sales is the best.

Two queries were used on AMC to get the information needed for the analysis, one for day parting and one for frequency cap. The queries were executed per month, meaning the date range selected on AMC was of a month, and also per brand.

For day parting, the main KPI used to understand how the campaign has performed is the purchase rate, which was calculated for each hour of the day. After calculating the purchase rate per hour, a chart was plot for each marketing campaign in analysis. On this chart, besides the purchase rate per hour, the percentage of the total daily impressions a campaign has received is displayed too, also divided by hour of the day. One of the results of this analysis for GB1 is shown on the chart below. It is possible to see that the time of the day that this specific campaign receives the most impressions is during the night, but the best purchase rate happens during the morning period.
</div>

<div align="center">
  <font size=3><em>Figure 1 – Day parting chart for a GB1 marketing campaign</em></font>
  <br>
  <img src="https://github.com/joaovargass/joaovargass.github.io/assets/39708920/fe9a19a1-f7cc-458f-8ed4-a96d5f9b6fc6">
</div>

<div align="justify">
Regarding the frequency cap, the objective was to determine the optimal number of advertisements to display to a consumer for optimal results. After obtaining the query results, the key performance indicators (KPIs) of purchase rate and return on ad spend (ROAS) were utilized to identify the optimal values. The analysis unfolded in two stages: initially, the number of impressions was aggregated into groups of 5. For instance, if a user viewed an ad once within a 30-day period, the user would fall into the 1 to 5 ads group. Subsequently, the analysis was refined by adjusting the query to capture more detailed values. Instead of using frequency groups, individual frequencies were treated as distinct groups. In the given example, the user would now be categorized in the 1 ad group. For each of these groups, the percentage of users falling into them was computed. Two separate charts were generated for each campaign under examination. One chart compared the purchase rate and the number of users in each group, while the other chart compared the purchase rate for each group with the corresponding ROAS.

Figures 2 and 3 illustrate the outcomes of the initial phase of the analysis for GB1 shavers campaigns, while Figures 4 and 5 depict the second phase of the analysis for the same campaigns. Notably, the first part of the analysis yields results that lack granularity, preventing the identification of precise optimal frequency values. In the first phase, the selected campaign exhibits its optimal frequency cap value between 6 to 10 advertisements per month, as indicated by the highest ROAS and purchase rate within that range. Conversely, the second part introduces more detailed frequency values. For the specific campaign depicted in the charts, the optimal frequency cap is determined to be 10 advertisements per month, aligning with the peak ROAS and purchase rate.
</div>

<div align="center">
  <font size=3><em>Figure 2 – Frequency cap chart for GB1 shavers in November 2021 – Purchase rate vs Percentage of users in frequency bucket (groups of 5)</em></font>
  <br>
  <img src="https://github.com/joaovargass/joaovargass.github.io/assets/39708920/2f9f420e-f5b2-4fe6-9ebe-48c4e248016c">
</div>

<div align="center">
  <font size=3><em>Figure 3 – Frequency cap for GB1 shavers in November 2021 – Purchase rate vs ROAS per frequency bucket (groups of 5)</em></font>
  <br>
  <img src="https://github.com/joaovargass/joaovargass.github.io/assets/39708920/cca76246-23b7-48c1-8f91-04d6209f627e">
</div>

<div align="center">
  <font size=3><em>Figure 4 – Frequency cap for GB1 shavers in November 2021 – Purchase rate vs Percentage of users in frequency bucket (singular)</em></font>
  <br>
  <img src="https://github.com/joaovargass/joaovargass.github.io/assets/39708920/81127e99-cb32-4ec4-8a94-7a6ae3d776ed">
</div>

<div align="center">
  <font size=3><em>Figure 5 – Frequency cap for GB1 shavers in November 2021 – Purchase rate vs ROAS per frequency bucket (singular)</em></font>
  <br>
  <img src="https://github.com/joaovargass/joaovargass.github.io/assets/39708920/ea5c1277-4549-4c2f-9a02-38162bd0b8b6">  
</div>

#### Media vehicles

<div align="justify">
In this segment of the analysis, the aim was to understand the collective and individual effectiveness of different types of advertisements. The exposure groups, or media types, chosen for comparison included Sponsored Advertisements (Search Ads), Display Advertisements, and Share of Voice packages. The objective was to assess the performance of these three advertisement types during peak periods (Black Friday and Prime Day) and off-peak periods, determining if their utilization justifies the expenditure. The analysis involved querying AMC for all the specified months relevant to the investigation.

In the initial analysis, the focus was on comparing Sponsored Advertisements and Display Advertisements, with Share of Voice packages earmarked for future examination. Each comparison was conducted on a brand basis, with the selected brands being GB1 and GB2. Upon retrieving the query results for the chosen months, key performance indicators (KPIs) used to gauge success, including ROAS and purchase rate, along with other values relevant for comparison, such as the percentage of total impressions and percentage of total sales attributed to an exposure group for that period, were calculated. These KPIs were computed individually for each brand and exposure group. Subsequently, a chart was generated to visually represent the ROAS for each brand in the selected month and exposure group. The outcomes are depicted in Figures 6 and 7, covering the period from August 2021 to June 2022.

Regarding GB1, it's evident that, for the majority of months, employing both Display and Search advertisements proves advantageous in terms of ROAS. Display advertisements consistently exhibit lower ROAS values when used independently, primarily due to their high impression numbers, as they are predominantly employed for maximizing reach. In the case of GB2, the effectiveness of utilizing both Search and Display advertisements is observed only in particular months. There are instances when Display advertisements are not utilized at all, corresponding to months where the ROAS chart displays zero values for Display.
</div>


<div align="center">
  <font size=3><em>Figure 6 – ROAS for each exposure group by month – GB1</em></font>
  <br>
  <img src="https://github.com/joaovargass/joaovargass.github.io/assets/39708920/6ecb7f14-ed88-4883-ba04-e1c94fc0d0b7">
</div>

<div align="center">
  <font size=3><em>Figure 7 – ROAS for each exposure group by month – GB2</em></font>
  <br>
  <img src="https://github.com/joaovargass/joaovargass.github.io/assets/39708920/b1b653bc-e47b-4b57-bba3-e0ab48b3a171"> 
</div>

<div align="justify">
To get a general picture of the use of both types of advertisements, the comparison values were summed for all the months in analysis, and the results were put in a table for each brand. For both GB1 and GB2, most part of the impressions come from Display advertisements, but the ROAS and purchase rate for this exposure group are very low. For GB1, as shown on Table 2, using the combination of both types of advertisements gives the best results. For GB2, observing the results on Table 3, the purchase rate is better when overlapping the advertisements, but the ROAS is better when using only Search ads.

As a conclusion, it is noticeable that for GB1, the use of both advertisements is important. For GB2, the recommendation is that the overlap of media vehicles should be done, but not on all months. The focus should be on using both of the them on peak period. For all tables, M stands for thousand and MM for million.
</div>


<div align="Center"> 
  <table>
  <caption>Table 2 - KPIs for GB1 split by exposure groups for the period of August 2021 until June 2022</caption>
  <thead>
    <tr>
      <th>Exposure Group</th>
      <th>Display</th>
      <th>Display x Search</th>
      <th>Search</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Total Impressions</td>
      <td>107.3MM</td>
      <td>70.5MM</td>
      <td>96.9MM</td>
    </tr>
    <tr>
      <td>Users that Purchased</td>
      <td>2.3M</td>
      <td>38.3M</td>
      <td>51.4M</td>
    </tr>
    <tr>
      <td>Purchase Amount</td>
      <td>149.5M</td>
      <td>6.0MM</td>
      <td>5.5MM</td>
    </tr>
    <tr>
      <td>Total Cost</td>
      <td>325.1M</td>
      <td>364.6M</td>
      <td>415.5M</td>
    </tr>
    <tr>
      <td>Unique Reach</td>
      <td>33.6MM</td>
      <td>2.3MM</td>
      <td>5.9MM</td>
    </tr>
    <tr>
      <td>Total Impressions %</td>
      <td>39.04%</td>
      <td>25.67%</td>
      <td>35.28%</td>
    </tr>
    <tr>
      <td>Purchase Amount %</td>
      <td>1.28%</td>
      <td>51.73%</td>
      <td>46.98%</td>
    </tr>
    <tr>
      <td>ROAS</td>
      <td>0.46</td>
      <td>16.51</td>
      <td>13.16</td>
    </tr>
    <tr>
      <td>Purchase Rate</td>
      <td>0.007%</td>
      <td>1.679%</td>
      <td>0.875%</td>
    </tr>
  </tbody>
</table> 
</div>

<div align="Center"> 
  <table>
  <caption>Table 3 - KPIs for GB2 split by exposure groups for the period of August 2021 until June 2022</caption>
  <thead>
    <tr>
      <th>Exposure Group</th>
      <th>Display</th>
      <th>Display x Search</th>
      <th>Search</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Total Impressions</td>
      <td>34.0MM</td>
      <td>13.8MM</td>
      <td>35.8MM</td>
    </tr>
    <tr>
      <td>Users that Purchased</td>
      <td>1.5M</td>
      <td>13.5M</td>
      <td>41.9M</td>
    </tr>
    <tr>
      <td>Purchase Amount</td>
      <td>26.7M</td>
      <td>488.7M</td>
      <td>957.5M</td>
    </tr>
    <tr>
      <td>Total Cost</td>
      <td>106.7M</td>
      <td>34.4M</td>
      <td>56.3M</td>
    </tr>
    <tr>
      <td>Unique Reach</td>
      <td>14.6MM</td>
      <td>586.7M</td>
      <td>3.6MM</td>
    </tr>
    <tr>
      <td>Total Impressions %</td>
      <td>40.68%</td>
      <td>16.49%</td>
      <td>42.84%</td>
    </tr>
    <tr>
      <td>Purchase Amount %</td>
      <td>1.81%</td>
      <td>33.18%</td>
      <td>65.01%</td>
    </tr>
    <tr>
      <td>ROAS</td>
      <td>0.25</td>
      <td>14.22</td>
      <td>17</td>
    </tr>
    <tr>
      <td>Purchase Rate</td>
      <td>0.010%</td>
      <td>2.297%</td>
      <td>1.173%</td>
    </tr>
  </tbody>
</table> 
</div>

<div align="justify">
As a second phase of this analysis, it is imperative to explore the impact of introducing Share of Voice (SoV) as a new exposure group on sales performance. To achieve this, understanding the specific periods during which the company procured SoV packages for the selected brands is crucial, given that this type of advertisement is typically seasonal and procured during peak periods. Among the analyzed brands, GB1 is the only one that utilized this type of advertisement. Consequently, two peak months, July 2022 (Prime Day) and October 2022 (second Prime Day), were chosen to incorporate this new variable.

New queries were executed on AMC, incorporating the new exposure group for each of the selected months. The outcomes are presented in Tables 4 and 5. It is discernible that the utilization of SoV packages proves advantageous during peak periods, exhibiting higher ROAS and Purchase Rates, particularly when combined with Search ads. Additionally, favorable results are observed when there is a triple overlap among the three exposure groups.
</div>


<div align="Center"> 
  <table>
  <caption>Table 4 - KPIs for GB1 split by exposure groups in July 2022</caption>
  <thead>
    <tr>
      <th>Exposure Group</th>
      <th>Total Impressions</th>
      <th>Purchase Amount</th>
      <th>Total Cost</th>
      <th>ROAS</th>
      <th>Purchase Rate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Display</td>
      <td>12.5MM</td>
      <td>20.7M</td>
      <td>38.9M</td>
      <td>0.53</td>
      <td>0.005%</td>
    </tr>
    <tr>
      <td>Display x Search</td>
      <td>189.8M</td>
      <td>548.1M</td>
      <td>39.7M</td>
      <td>13.80</td>
      <td>16.178%</td>
    </tr>
    <tr>
      <td>Display x Search x SoV</td>
      <td>132.2M</td>
      <td>262.4M</td>
      <td>27.9M</td>
      <td>9.40</td>
      <td>9.900%</td>
    </tr>
    <tr>
      <td>Display x SoV</td>
      <td>3.6MM</td>
      <td>16.8M</td>
      <td>31.5M</td>
      <td>0.53</td>
      <td>0.011%</td>
    </tr>
    <tr>
      <td>Search</td>
      <td>43.8M</td>
      <td>522.9M</td>
      <td>41.2M</td>
      <td>12.69</td>
      <td>18.591%</td>
    </tr>
    <tr>
      <td>Search x SoV</td>
      <td>3.7M</td>
      <td>84.5M</td>
      <td>5.3M</td>
      <td>15.92</td>
      <td>22.721%</td>
    </tr>
    <tr>
      <td>SoV</td>
      <td>213</td>
      <td>0.0</td>
      <td>25.0M</td>
      <td>0.00</td>
      <td>0.003%</td>
    </tr>
  </tbody>
</table> 
</div>

<div align="Center"> 
  <table>
  <caption>Table 5 - KPIs for GB1 split by exposure groups in October 2022</caption>
  <thead>
    <tr>
      <th>Exposure Group</th>
      <th>Total Impressions</th>
      <th>Purchase Amount</th>
      <th>Total Cost</th>
      <th>ROAS</th>
      <th>Purchase Rate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Display</td>
      <td>12.8MM</td>
      <td>0.0</td>
      <td>41.3M</td>
      <td>0.00</td>
      <td>0.002%</td>
    </tr>
    <tr>
      <td>Display x Search</td>
      <td>80.5M</td>
      <td>195.4M</td>
      <td>20.2M</td>
      <td>9.67</td>
      <td>12.730%</td>
    </tr>
    <tr>
      <td>Display x Search x SoV</td>
      <td>62.6M</td>
      <td>122.8M</td>
      <td>14.5M</td>
      <td>8.50</td>
      <td>8.251%</td>
    </tr>
    <tr>
      <td>Display x SoV</td>
      <td>4.3MM</td>
      <td>0.0</td>
      <td>41.1M</td>
      <td>0.00</td>
      <td>0.006%</td>
    </tr>
    <tr>
      <td>Search</td>
      <td>20.6M</td>
      <td>199.5M</td>
      <td>22.0M</td>
      <td>9.07</td>
      <td>15.621%</td>
    </tr>
    <tr>
      <td>Search x SoV</td>
      <td>1.3M</td>
      <td>19.3M</td>
      <td>2.0M</td>
      <td>9.50</td>
      <td>15.977%</td>
    </tr>
    <tr>
      <td>SoV</td>
      <td>50</td>
      <td>3.8M</td>
      <td>20.2M</td>
      <td>0.19</td>
      <td>0.001%</td>
    </tr>
  </tbody>
</table> 
</div>

#### Campaign paths

<div align="justify">
The analysis focused on understanding various campaign paths leading to a purchase, considering the sequence and frequency of Search and Display ads. Key metrics for comparison included the starting and ending types of advertisements, path occurrences, purchase rate, ROAS, average path length, and the percentage of total occurrences for each path type. Tables 6 and 7 reveal that paths starting and ending with display ads have the highest occurrences but exhibit the lowest purchase rate. Conversely, paths starting with Search and ending with Display ads yield the best results in terms of ROAS and purchase rate.
</div>


<div align="Center"> 
  <table>
  <caption>Table 6 - Path to purchase for GB1 campaigns</caption>
  <thead>
    <tr>
      <th>Starts With</th>
      <th>Display</th>
      <th>Display</th>
      <th>Search</th>
      <th>Search</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ends With</td>
      <td>Display</td>
      <td>Search</td>
      <td>Display</td>
      <td>Search</td>
    </tr>
    <tr>
      <td>Path Occurrence</td>
      <td>38MM</td>
      <td>48M</td>
      <td>134M</td>
      <td>245M</td>
    </tr>
    <tr>
      <td>ROAS</td>
      <td>7.31</td>
      <td>8.24</td>
      <td>10.69</td>
      <td>4.95</td>
    </tr>
    <tr>
      <td>Purchase Rate</td>
      <td>0.016%</td>
      <td>1.114%</td>
      <td>1.808%</td>
      <td>4.749%</td>
    </tr>
    <tr>
      <td>Average Path Length</td>
      <td>1.4</td>
      <td>3.1</td>
      <td>3.1</td>
      <td>1.3</td>
    </tr>
    <tr>
      <td>Path Occurrence %</td>
      <td>98.89%</td>
      <td>0.13%</td>
      <td>0.35%</td>
      <td>0.64%</td>
    </tr>
  </tbody>
</table> 
</div>

<div align="Center"> 
  <table>
  <caption>Table 7 - Path to purchase for GB2 campaigns</caption>
  <thead>
    <tr>
      <th>Starts With</th>
      <th>Display</th>
      <th>Display</th>
      <th>Search</th>
      <th>Search</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ends With</td>
      <td>Display</td>
      <td>Search</td>
      <td>Display</td>
      <td>Search</td>
    </tr>
    <tr>
      <td>Path Occurrence</td>
      <td>12MM</td>
      <td>5.8M</td>
      <td>19M</td>
      <td>85M</td>
    </tr>
    <tr>
      <td>ROAS</td>
      <td>2.76</td>
      <td>15.36</td>
      <td>19.31</td>
      <td>16.44</td>
    </tr>
    <tr>
      <td>Purchase Rate</td>
      <td>0.021%</td>
      <td>4.079%</td>
      <td>5.522%</td>
      <td>17.5%</td>
    </tr>
    <tr>
      <td>Average Path Length</td>
      <td>1</td>
      <td>2.5</td>
      <td>2.4</td>
      <td>1.4</td>
    </tr>
    <tr>
      <td>Path Occurrence %</td>
      <td>99.11%</td>
      <td>0.05%</td>
      <td>0.15%</td>
      <td>0.69%</td>
    </tr>
  </tbody>
</table> 
</div>

#### Time lag for purchase

<div align="justify">
In this analysis, consumer interactions with advertisements within 15 days of exposure were examined. The study focused on three main actions: Purchase, Add to Shopping Cart, and See Detail Page after viewing an advertisement. The data, spanning 12 months and divided into 15-day intervals, revealed insights such as the time elapsed after ad exposure, user actions over time, and the percentage of total purchases within the 15-day period. Analyzing GB1 and GB2 from June 2021 to April 2022, Figures 8 and 9 illustrated similar consumer behavior, emphasizing a significant conversion peak two days after ad exposure, contributing to over 50% of total sales during that period.
</div>


<div align="center">
  <font size=3><em>Figure 8 – Chart showing time lag until conversion event after seeing an advertisement for GB1</em></font>
  <br>
  <img src="https://github.com/joaovargass/joaovargass.github.io/assets/39708920/db11c552-bef2-4929-add1-86ebe6eeaece">
</div>

<div align="center">
  <font size=3><em>Figure 9 – Chart showing time lag until conversion event after seeing an advertisement for GB2</em></font>
  <br>
  <img src="https://github.com/joaovargass/joaovargass.github.io/assets/39708920/65a8c4ff-08a3-4283-accf-ac3162cdbb00">
</div>

#### Consumer audiences

<div align="justify">
In the analysis of consumer audiences on Amazon Marketing Cloud, the focus was on identifying high-performing segments for each brand, GB1 and GB2. Consumer audiences represent groups with similar purchasing patterns, enabling targeted advertising based on interests and improving overall performance compared to generic targeting. For each brand, the analysis involved displaying total product sales in euros, calculating ROAS, purchase rate, and the percentage of sales attributed to new-to-brand (NTB) users. NTB users are defined as those who haven't purchased any products from a brand in the last 12 months. The analysis covered the period from August 2021 to June 2022.

Table 8 displays GB1's top-performing segments, while Table 9 presents GB2's. Notably, the first two segments in both tables are broad and general, with the more specific descriptions in subsequent segments proving to be more crucial for the brands. Additionally, GB1 exhibits a higher percentage of consumers who are new to the brand compared to GB2. This suggests that GB2's consumers show a higher inclination towards repurchasing products.
</div>


<div align="Center"> 
  <table>
    <caption>Table 8 - Best performing segments for GB1 in the period of August 2021 until June 2022</caption>
    <thead>
        <tr>
            <th>Segment Name</th>
            <th>Total Product Sales</th>
            <th>Purchase Rate</th>
            <th>Percentage of NTB sales</th>
            <th>ROAS</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Demo - clients francais</td>
            <td>2.98MM</td>
            <td>0.06%</td>
            <td>76%</td>
            <td>3.6</td>
        </tr>
        <tr>
            <td>Demo - Clients</td>
            <td>2.74MM</td>
            <td>0.06%</td>
            <td>76%</td>
            <td>3.7</td>
        </tr>
        <tr>
            <td>LS - Acheteurs d'articles peu couteux</td>
            <td>2.61MM</td>
            <td>0.06%</td>
            <td>76%</td>
            <td>3.6</td>
        </tr>
        <tr>
            <td>LS - Produits d’Entertainment</td>
            <td>2.56MM</td>
            <td>0.06%</td>
            <td>76%</td>
            <td>3.5</td>
        </tr>
        <tr>
            <td>LS - Beauté (Santé et Soins du corps)</td>
            <td>2.58MM</td>
            <td>0.07%</td>
            <td>75%</td>
            <td>3.5</td>
        </tr>
    </tbody>
</table> 
</div>

<div align="Center"> 
  <table>
    <caption>Table 9 - Best performing segments for GB2 in the period of August 2021 until June 2022</caption>
    <thead>
        <tr>
            <th>Segment Name</th>
            <th>Total Product Sales</th>
            <th>Purchase Rate</th>
            <th>Percentage of NTB sales</th>
            <th>ROAS</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Demo - clients francais</td>
            <td>302M</td>
            <td>0.11%</td>
            <td>55%</td>
            <td>2.3</td>
        </tr>
        <tr>
            <td>Demo - Clients</td>
            <td>271M</td>
            <td>0.12%</td>
            <td>54%</td>
            <td>2.3</td>
        </tr>
        <tr>
            <td>LS - Acheteurs d'articles peu couteux</td>
            <td>265M</td>
            <td>0.13%</td>
            <td>53%</td>
            <td>2.3</td>
        </tr>
        <tr>
            <td>LS - Produits d’Entertainment</td>
            <td>263M</td>
            <td>0.13%</td>
            <td>53%</td>
            <td>2.2</td>
        </tr>
        <tr>
            <td>LS - Beauté (Santé et Soins du corps)</td>
            <td>263M</td>
            <td>0.16%</td>
            <td>52%</td>
            <td>2.2</td>
        </tr>
    </tbody>
</table> 
</div>

<div align="justify">
In the next phase of the analysis, the focus was on identifying the most lucrative age groups for each brand in terms of sales. This involved utilizing AMC segments that categorize consumers based on age. Additionally, the analysis explored the performance of different devices (Personal Computer, Phone, Tablet) for each age group. The results, presented in Table 10 for GB1 and Table 11 for GB2, highlight that age groups 35 to 44 and 45 to 54 contribute significantly to sales for both brands. Phones are the primary sales device for GB1, while Personal Computers (PCs) dominate for GB2. Notably, GB2's consumer base exhibits a higher proportion of repeat purchasers. An interesting observation is that Tablets, despite contributing less to sales, demonstrate the highest return on ad spend (ROAS) across most groups.
</div>


<div align="Center"> 
  <table>
  <caption>Table 10 - Best performing age groups, divided by device, for GB1 in the period of August 2021 until June 2022</caption>
  <thead>
    <tr>
      <th>Segment Name</th>
      <th>Device Type</th>
      <th>Total Product Sales</th>
      <th>Purchase Rate</th>
      <th>Percentage of NTB sales</th>
      <th>ROAS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">Demo - Age 18-24</td>
      <td>PC</td>
      <td>65M</td>
      <td>0.07%</td>
      <td>77%</td>
      <td>3.6</td>
    </tr>
    <tr>
      <td>Phone</td>
      <td>90M</td>
      <td>0.05%</td>
      <td>81%</td>
      <td>3.6</td>
    </tr>
    <tr>
      <td>Tablet</td>
      <td>1.7M</td>
      <td>0.08%</td>
      <td>67%</td>
      <td>5.2</td>
    </tr>
    <tr>
      <td rowspan="3">Demo - Age 25-34</td>
      <td>PC</td>
      <td>142M</td>
      <td>0.06%</td>
      <td>78%</td>
      <td>3.5</td>
    </tr>
    <tr>
      <td>Phone</td>
      <td>250M</td>
      <td>0.05%</td>
      <td>81%</td>
      <td>3.5</td>
    </tr>
    <tr>
      <td>Tablet</td>
      <td>1.2M</td>
      <td>0.06%</td>
      <td>77%</td>
      <td>3.4</td>
    </tr>
    <tr>
      <td rowspan="3">Demo - Age 35-44</td>
      <td>PC</td>
      <td>212M</td>
      <td>0.06%</td>
      <td>76%</td>
      <td>3.5</td>
    </tr>
    <tr>
      <td>Phone</td>
      <td>300M</td>
      <td>0.05%</td>
      <td>81%</td>
      <td>3.6</td>
    </tr>
    <tr>
      <td>Tablet</td>
      <td>3.3M</td>
      <td>0.04%</td>
      <td>82%</td>
      <td>4.4</td>
    </tr>
    <tr>
      <td rowspan="3">Demo - Age 45-54</td>
      <td>PC</td>
      <td>221M</td>
      <td>0.07%</td>
      <td>74%</td>
      <td>3.9</td>
    </tr>
    <tr>
      <td>Phone</td>
      <td>185M</td>
      <td>0.06%</td>
      <td>76%</td>
      <td>3.8</td>
    </tr>
    <tr>
      <td>Tablet</td>
      <td>2.9M</td>
      <td>0.05%</td>
      <td>86%</td>
      <td>4</td>
    </tr>
     <tr>
      <td rowspan="3">Demo - Age 55-64</td>
      <td>PC</td>
      <td>110M</td>
      <td>0.07%</td>
      <td>69%</td>
      <td>3.9</td>
    </tr>
    <tr>
      <td>Phone</td>
      <td>70M</td>
      <td>0.06%</td>
      <td>75%</td>
      <td>3.5</td>
    </tr>
    <tr>
      <td>Tablet</td>
      <td>2.5M</td>
      <td>0.06%</td>
      <td>84%</td>
      <td>5.8</td>
    </tr>
  </tbody>
</table> 
</div>

<div align="Center"> 
  <table>
  <caption>Table 11 - Best performing age groups, divided by device, for GB2 in the period of August 2021 until June 2022</caption>
  <thead>
    <tr>
      <th>Segment Name</th>
      <th>Device Type</th>
      <th>Total Product Sales</th>
      <th>Purchase Rate</th>
      <th>Percentage of NTB sales</th>
      <th>ROAS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">Demo - Age 18-24</td>
      <td>PC</td>
      <td>12M</td>
      <td>0.15%</td>
      <td>53%</td>
      <td>1.9</td>
    </tr>
    <tr>
      <td>Phone</td>
      <td>3.7M</td>
      <td>0.11%</td>
      <td>64%</td>
      <td>1.8</td>
    </tr>
    <tr>
      <td>Tablet</td>
      <td>71</td>
      <td>0.17%</td>
      <td>22%</td>
      <td>1.4</td>
    </tr>
    <tr>
      <td rowspan="3">Demo - Age 25-34</td>
      <td>PC</td>
      <td>23M</td>
      <td>0.16%</td>
      <td>56%</td>
      <td>2.1</td>
    </tr>
    <tr>
      <td>Phone</td>
      <td>11M</td>
      <td>0.12%</td>
      <td>63%</td>
      <td>2.1</td>
    </tr>
    <tr>
      <td>Tablet</td>
      <td>28</td>
      <td>0.11%</td>
      <td>100%</td>
      <td>0.7</td>
    </tr>
    <tr>
      <td rowspan="3">Demo - Age 35-44</td>
      <td>PC</td>
      <td>37M</td>
      <td>0.15%</td>
      <td>55%</td>
      <td>2.2</td>
    </tr>
    <tr>
      <td>Phone</td>
      <td>15M</td>
      <td>0.11%</td>
      <td>58%</td>
      <td>2.1</td>
    </tr>
    <tr>
      <td>Tablet</td>
      <td>136</td>
      <td>0.11%</td>
      <td>13%</td>
      <td>2.8</td>
    </tr>
    <tr>
      <td rowspan="3">Demo - Age 45-54</td>
      <td>PC</td>
      <td>43M</td>
      <td>0.16%</td>
      <td>51%</td>
      <td>2.4</td>
    </tr>
    <tr>
      <td>Phone</td>
      <td>10M</td>
      <td>0.13%</td>
      <td>59%</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Tablet</td>
      <td>141</td>
      <td>0.12%</td>
      <td>63%</td>
      <td>4.2</td>
    </tr>
    <tr>
      <td rowspan="3">Demo - Age 55-64</td>
      <td>PC</td>
      <td>23M</td>
      <td>0.17%</td>
      <td>47%</td>
      <td>2.5</td>
    </tr>
    <tr>
      <td>Phone</td>
      <td>4.7M</td>
      <td>0.15%</td>
      <td>57%</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Tablet</td>
      <td>134</td>
      <td>0.07%</td>
      <td>67%</td>
      <td>2.8</td>
    </tr>
  </tbody>
</table> 
</div>

</body>
</html>
