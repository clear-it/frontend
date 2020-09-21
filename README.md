## Basic Implementation

The Frontend will retrieve the "State" data object from the api and then run conditionals based on user input to determine eligibility.  This reduces the number of api calls necessary and allows for the api to be extensible for other use cases.

The general idea:

user selects state of conviction --> retrieve data from Backend --> hold data in state --> render forms to harvest data --> compare --> redirect to results page.
