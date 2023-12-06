# Marketing Technology: a study on compliance, acquisition and usage of first-party data in digital marketing
Projeto de formatura do aluno João Vitor Vargas Soares para conclusão do curso de Engenharia de Computação da Escola Politécnica da USP feito em inglês.

## Objectives

This is a project made from the student's internship experience in the double degree exchange program at the University of Grenoble INP in France. It involves adapting the End of Studies project undertaken at a consumers goods multinational, with a specific emphasis on exploring the interplay between data analysis and digital marketing in the contemporary landscape marked by the enforcement of new digital marketing compliance regulations such as GDPR. The internship comprised two primary projects: the acquisition and activation of consumer first-party data, as well as the exploration of retail data and collaboration through the utilization of Amazon Marketing Cloud.

### Project 1: Consumer first-party data acquisition and media activation

The main objective of the initial project was to gather and leverage consumer first-party data for company's grooming brands, aligning with the company's fiscal year objectives. Data activation involves extracting value from data by generating insights and translating those insights into actionable measures. This discussion also encompasses changes in data collection methods and types in digital marketing, particularly addressing the impact of new data regulations currently in effect in Europe.

### Project 2: Retail data and collaboration using Amazon Marketing Cloud

The objective of the second project was to use the Amazon Marketing Cloud digital marketing platform for the collection and analysis of consumer data. The aim was to address the company's pre-established business inquiries, employing Python for data analysis. AMC serves as a cloud-based clean room housing details about sales and consumer engagement on Amazon's website, accessible through SQL queries.

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

## Implementation and Results

### Project 1: Consumer first-party data acquisition and media activation

The main objective of this project was to find on the Growing Families database consumers that could be potential grooming product buyers. These consumers must comply to some contrains defined on the system requirements. To find these consumers, some queries were constructed and the final result was displayed on a table for all five countries in analysis.

#### Selecting Marketing Program Numbers

This analysis encompassed five distinct countries: Italy, France, Germany, Spain, and the United Kingdom. Each country is associated with its unique Marketing Program Number (MPN) within the corporate database, known as the Growing Families database, and for the Grooming brands. An MPN is an exclusive identifier assigned to a marketing plan devised by the company, encompassing all endeavors aimed at boosting sales for a specific brand or a group of brands, categorized by country. Each of the selected grooming brands possess its dedicated MPN corresponding to the country under examination. To retrieve the necessary Marketing Program Numbers, a query was directly executed from BigQuery’s interface.

#### Queries Constrains

To ensure compliance with system requirements mandating gender and age information for all consumers, the verification process must be integrated into the queries. The database contains various potential gender values. Therefore, before selecting consumers based on this data, it is crucial to identify and consolidate all available gender values within the database. Consequently, the only acceptable values for gender become 'm' or 'f'.

Another constrain defined on the system requirements is that a consumer must be active on the past 12 months. To select the active consumers, the events that the consumer participates that are not considered as active need to be defined. Then, the last time the consumer has been active needs to be verified on all tables related to events. After that, the events considered as not active were excluded from this verification, resulting on a list of userId’s that are active on the past 12 months.

The next constrain is regarding the email marketing communications. The consumers that have agreed to receive email marketing communications need to be selected by verifying the database column that contains that information.

One final constrain needs to be added to the analysis, which is related to the analysis done in Italy. In Italy, the databases have been through a cleaning regarding GDPR’s regulations, which is related to the consent given by the user to allow the usage of their data. This information is on a column present on the database, which needs to be verified on all Italian databases analysis.

#### Queries Created

##### Consumer traits query

The first query created had the intent of looking for consumer traits that have grooming related terms on its name. A consumer trait is an user attribute such as name, gender, city, but also computed traits, like the answers of a survey. Regular expression functions were used to search for grooming related traits. The grooming traits and all the unique userId’s related to them that are present on the Growing Families database were selected. After selecting them, there was an exclusion of: the userId’s that were present on any of the grooming databases; the traits that have less then 10000 userId’s associated to them. Finally, all the constrains mentioned before were applied to get the final results containing the number of unique consumers related to each consumer trait.

##### Consumer sources query

The next query created was regarding the sources from where the consumer data has come from. The first thing done was getting a list of all of the sources of information available. With the sources selected, the next step is to select the ones that are related to grooming and get all of the consumers that have them as a source. To verify if the source is grooming related, regular expresions were used on the description and name of the source by verifying if there were any grooming terms on them. As it was done for the traits query, the constrains defined before were also applied to get the final result containing the number of userId's for each source.

##### Consumer events query

The events query was done based on the events selected as meaningful for grooming brands. User events are user activity (clicks, views, orders) on a touchpoint. All of the selected consumers are unique, meaning that their userId appears only once at the results of the analysis. The events selected on the queries were: email events, coupon events, receipt events and cashback events. After selecting all consumers related to these events, the contrains defined before were applied resulting on a list of events and the number of unique consumers that are related to those events. 

##### All consumers query

The query includes the merge of all of the sources, traits and events SQL queries, as well as the constrains that were defined, resulting on a final number of unique users that could be potential grooming consumers. For the final number of users, the only events that were not considered were the ones related to email events, which was a decision that was made in discussion with the company's ecommerce team.

#### Results

In this section, only the results containing the total number of potential grooming consumers by country will be discussed. The results related to the other queries are available at the full paper that will be published by the student, in which the results are divided by traits, events and sources analyzed separately.

The results for each country are shown on the table below. <i>Total Users</i> is the number of the users that have gender and age information and that are related to at least one grooming golden trait, event or source. <i>Opt-in users</i> are the <i>Total Users</i> with the restriction of having agreed to receiving email marketing communications. <i>Active users</i> are the <i>Total Users</i> with the restriction of being active on the past 12 months. <i>Active and Opt-in Users</i> are the number of users with both restrictions. The percentage of Male and Female consumers with both restrictions is also quantified on the table below.

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

By examining the results of the analysis, it is possible to see that for all countries the major part of consumers are female, and that for most of them most of the consumers are active and accepted to be contacted by email marketing. This means that most of the consumers are considered potential grooming consumers, which is the main point of this analysis. Germany and Italy are the only countries that have less then half the total consumer as potential grooming consumers, meaning that their consumers are not as active as on the other countries and that most of them do not agree to be contacted via email marketing.

### Project 2: Retail data and collaboration using Amazon Marketing Cloud

The objective of this project was to analyze Amazon Marketing Cloud's consumer data to answer the business questions provided to the student. The implementation and results were divided in five topics, each one answering one of the questions. There were two grooming brands in analysis, which will be defined as GB1 (Grooming Brand 1) and GB2 (Grooming Brand 2) for legal reasons.

#### Frequency cap and day parting

The objective of this part of the analysis was to understand, for Display Advertisements, what is the division of advertisements displayed during the day (day parting) and what is the optimal frequency cap to be set for displaying them, in other words, how many advertisements they should be displayed to a consumer for each marketing campaign set up on a period of 30 days to get the best results in terms of purchases. This is important to know because Amazon charges their advertisements per impression and per clicks (how many times the advertisement was clicked), meaning that a maximum value of times an advertisement is displayed need to be set up so that the ratio between the money spent on a campaign and the return in sales is the best.

Two queries were used on AMC to get the information needed for the analysis, one for day parting and one for frequency cap. The queries were executed per month, meaning the date range selected on AMC was of a month, and also per brand.

For day parting, the main KPI used to understand how the campaign has performed is the purchase rate, which was calculated for each hour of the day. After calculating the purchase rate per hour, a chart was plot for each marketing campaign in analysis. On this chart, besides the purchase rate per hour, the percentage of the total daily impressions a campaign has received is displayed too, also divided by hour of the day. One of the results of this analysis for GB1 is shown on the chart below. It is possible to see that the time of the day that this specific campaign receives the most impressions is during the night, but the best purchase rate happens during the morning period.
<p align="center">
  <img src="https://github.com/joaovargass/joaovargass.github.io/assets/39708920/fe9a19a1-f7cc-458f-8ed4-a96d5f9b6fc6">
  <br>
  Figure 1 – Day parting chart for a GB1 marketing campaign
</p>

Regarding the frequency cap, the objective was to determine the optimal number of advertisements to display to a consumer for optimal results. After obtaining the query results, the key performance indicators (KPIs) of purchase rate and return on ad spend (ROAS) were utilized to identify the optimal values. The analysis unfolded in two stages: initially, the number of impressions was aggregated into groups of 5. For instance, if a user viewed an ad once within a 30-day period, the user would fall into the 1 to 5 ads group. Subsequently, the analysis was refined by adjusting the query to capture more detailed values. Instead of using frequency groups, individual frequencies were treated as distinct groups. In the given example, the user would now be categorized in the 1 ad group. For each of these groups, the percentage of users falling into them was computed. Two separate charts were generated for each campaign under examination. One chart compared the purchase rate and the number of users in each group, while the other chart compared the purchase rate for each group with the corresponding ROAS.

Figures 2 and 3 illustrate the outcomes of the initial phase of the analysis for GB1 shavers campaigns, while Figures 4 and 5 depict the second phase of the analysis for the same campaigns. Notably, the first part of the analysis yields results that lack granularity, preventing the identification of precise optimal frequency values. In the first phase, the selected campaign exhibits its optimal frequency cap value between 6 to 10 advertisements per month, as indicated by the highest ROAS and purchase rate within that range. Conversely, the second part introduces more detailed frequency values. For the specific campaign depicted in the charts, the optimal frequency cap is determined to be 10 advertisements per month, aligning with the peak ROAS and purchase rate.

<p align="center">
  <img src="https://github.com/joaovargass/joaovargass.github.io/assets/39708920/2f9f420e-f5b2-4fe6-9ebe-48c4e248016c">
  <br>
  Figure 2 – Frequency cap chart for GB1 shavers in November 2021 – Purchase rate vs Percentage of users in frequency bucket (groups of 5)
</p>

<p align="center">
  <img src="https://github.com/joaovargass/joaovargass.github.io/assets/39708920/cca76246-23b7-48c1-8f91-04d6209f627e">
  <br>
  Figure 3 – Frequency cap for GB1 shavers in November 2021 – Purchase rate vs ROAS per frequency bucket (groups of 5)
</p>

<p align="center">
  <img src="https://github.com/joaovargass/joaovargass.github.io/assets/39708920/81127e99-cb32-4ec4-8a94-7a6ae3d776ed">
  <br>
  Figure 4 – Frequency cap for GB1 shavers in November 2021 – Purchase rate vs Percentage of users in frequency bucket (singular)
</p>

<p align="center">
  <img src="https://github.com/joaovargass/joaovargass.github.io/assets/39708920/ea5c1277-4549-4c2f-9a02-38162bd0b8b6">
  <br>
  Figure 5 – Frequency cap for GB1 shavers in November 2021 – Purchase rate vs ROAS per frequency bucket (singular)
</p>

#### Media vehicles

In this segment of the analysis, the aim was to understand the collective and individual effectiveness of different types of advertisements. The exposure groups, or media types, chosen for comparison included Sponsored Advertisements (Search Ads), Display Advertisements, and Share of Voice packages. The objective was to assess the performance of these three advertisement types during peak periods (Black Friday and Prime Day) and off-peak periods, determining if their utilization justifies the expenditure. The analysis involved querying AMC for all the specified months relevant to the investigation.

In the initial analysis, the focus was on comparing Sponsored Advertisements and Display Advertisements, with Share of Voice packages earmarked for future examination. Each comparison was conducted on a brand basis, with the selected brands being GB1 and GB2. Upon retrieving the query results for the chosen months, key performance indicators (KPIs) used to gauge success, including ROAS and purchase rate, along with other values relevant for comparison, such as the percentage of total impressions and percentage of total sales attributed to an exposure group for that period, were calculated. These KPIs were computed individually for each brand and exposure group. Subsequently, a chart was generated to visually represent the ROAS for each brand in the selected month and exposure group. The outcomes are depicted in Figures 6 and 7, covering the period from August 2021 to June 2022.

Regarding GB1, it's evident that, for the majority of months, employing both Display and Search advertisements proves advantageous in terms of ROAS. Display advertisements consistently exhibit lower ROAS values when used independently, primarily due to their high impression numbers, as they are predominantly employed for maximizing reach. In the case of GB2, the effectiveness of utilizing both Search and Display advertisements is observed only in particular months. There are instances when Display advertisements are not utilized at all, corresponding to months where the ROAS chart displays zero values for Display.

<p align="center">
  <img src="https://github.com/joaovargass/joaovargass.github.io/assets/39708920/6ecb7f14-ed88-4883-ba04-e1c94fc0d0b7">
  <br>
  Figure 6 – ROAS for each exposure group by month – GB1
</p>

<p align="center">
  <img src="https://github.com/joaovargass/joaovargass.github.io/assets/39708920/b1b653bc-e47b-4b57-bba3-e0ab48b3a171">
  <br>
  Figure 7 – ROAS for each exposure group by month – GB2
</p>

To get a general picture of the use of both types of advertisements, the comparison values were summed for all the months in analysis, and the results were put in a table for each brand. For both GB1 and GB2, most part of the impressions come from Display advertisements, but the ROAS and purchase rate for this exposure group are very low. For GB1, as shown on Table 2, using the combination of both types of advertisements gives the best results. For Gillette, observing the results on Table 23, the purchase rate is better when overlapping the advertisements, but the ROAS is better when using only Search ads.



