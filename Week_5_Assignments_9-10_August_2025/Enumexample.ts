enum environment
{
   LOCAL = "local",
    DEVELOPMENT = "development",
    STAGING = "staging",
    PRODUCTION = "production"

}
function runTests(env: environment):void{

    console.log(`Tests are running in ${env}`);   

}
 runTests(environment.LOCAL)
  runTests(environment.DEVELOPMENT)
 runTests(environment.STAGING)
  runTests(environment.PRODUCTION)
  
    
    