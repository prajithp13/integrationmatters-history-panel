# History Panel

![img.png](https://github.com/IntegrationMatters/integrationmatters-history-panel/raw/master/src/assets/images/history-template.png)

The History panel displays the progression of a variable number of points within a defined time range. \
Furthermore a comparison with a previous time range is shown and a trend indicates if the numbers are rising or drop.

## Required queries and query names

Query name | query
--- | ---
**total-filtered** | increase(application_flows_state_total{status="success"}[${__range}])
**previous-filtered** | increase(application_flows_state_total{status="success"}[${__range}] offset ${__range})

**The query names are mandatory.**


