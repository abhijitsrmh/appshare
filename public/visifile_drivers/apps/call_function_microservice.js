async function call_function(args) {
/*
base_component_id("call_function_microservice")
visibility("PUBLIC")
created_timestamp(1591628024028)
display_name("New microservice")
only_run_on_server(true)
rest_api("call_function")
logo_url("/driver_icons/rest.png")
*/

let result = {}
if(args && args.params) {
    result = await callFunction(
    eval( "(" + args.params.find + ")" )
    ,
    eval( "(" + args.params.args + ")" )
    )

        return result

    }

}
