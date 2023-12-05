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

## Implementation and Results

### Project 1: Consumer first-party data acquisition and media activation

The main objective of this project was to find on the Growing Families database consumers that could be potential grooming product buyers. These consumers must comply to some contrains defined on the system requirements. To find these consumers, some queries were constructed and the final result was displayed on a table for all five countries in analysis.

#### Selecting Marketing Program Numbers

This analysis encompassed five distinct countries: Italy, France, Germany, Spain, and the United Kingdom. Each country is associated with its unique Marketing Program Number (MPN) within the corporate database, known as the Growing Families database, and for the Grooming brands. An MPN is an exclusive identifier assigned to a marketing plan devised by the company, encompassing all endeavors aimed at boosting sales for a specific brand or a group of brands, categorized by country. The Grooming brands used in the analysis were Gillette and Braun, each possessing its dedicated MPN corresponding to the country under examination. To retrieve the necessary Marketing Program Numbers, a query was directly executed from BigQuery’s interface.

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
    <tr>
        <td><b>Country</b></td>
        <td><b>Total Users</b></td>
        <td><b>Opt-in Users</b></td>
        <td><b>Active Users</b></td>
        <td><b>Active and Opt-in Users</b></td>
        <td><b>Active and Opt-in Female %</b></td>
        <td><b>Active and Opt-in Female %</b></td>
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
