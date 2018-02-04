export default function getBaseUrl(){
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

function getQueryStringParameterByName(parameterName, url){
  if(!url) url = window.location.href;
  parameterName = parameterName.replace(/[\[\]]/g, "\\$&");
  let regex = new RegExp("[?&]" + parameterName + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if(!results) return null;
  if(!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
