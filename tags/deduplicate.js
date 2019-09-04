<script>
// Script dat ervoor zorgt dat er een cookie wordt gezet op het moment dat er in de utm_source iets verwerkt is. Dient op elke landingspagina te worden geladen.

function getURLParameter(name) {return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(window.location.search)||[,null])[1]);}
function setCookie(C,E,A,H,D,G){var B=new Date();B.setTime(B.getTime());var F=new Date(B.getTime()+(A*1000*60*60*24));document.cookie=C+"="+escape(E)+((A)?";expires="+F.toGMTString():"")+((H)?";path="+H:"")+((D)?";domain="+D:"")+((G)?";secure":"");}
  
  

var mediumsource, medium = getURLParameter('utm_medium');
var source = getURLParameter('utm_source');
if (medium != '' && medium != 'null') {
  if (source == 'zanox') { mediumsource = 'zanox' }
  else if (source == 'tradetracker') { mediumsource = 'tradetracker' }
  else if (source == 'affiliate_tradetrackerNL') { mediumsource = 'tradetracker' }
  else if (source == 'affiliate_tradetrackerBE') { mediumsource = 'tradetracker' }
  else if (source == 'daisycon') { mediumsource = 'daisycon' }
  else if (medium == 'daisycon') { mediumsource = 'daisycon' }
  else if (source == 'zoover') { mediumsource = 'zoover' }
  else if (source == 'criteo') { mediumsource = 'criteo' }
  else if (source == 'Criteo') { mediumsource = 'criteo' }
  else if (medium == 'offline') { mediumsource = 'offline' }
  else if (source == 'clk.tradedoubler.com') { mediumsource = 'tradedoubler' }
  else if (source == 'affiliate_tradedoublerNL') { mediumsource = 'tradedoubler' }
  else if (source != '' && source != 'null') { mediumsource = medium + '_' + source }
}
  
var internsource = getURLParameter('utm_intern_campaign');
if (internsource == 'offlinebooking') { mediumsource = 'offline' }

var gclid = getURLParameter('gclid');
if (gclid != '' && gclid != 'null') { mediumsource = 'cpc_google' }

if (mediumsource != undefined) {
  ckdmn = window.location.hostname.split(".");
  dmn = "; domain=" + ckdmn[ckdmn.length-2] + "." + ckdmn[ckdmn.length-1];
  setCookie('ontdubbelaar', mediumsource, 30, '/', dmn);
}

</script>
