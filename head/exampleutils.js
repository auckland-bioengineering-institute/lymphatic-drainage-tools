/**
 * Open a connection to the specified URL, which is
 * intended to provide an XML message.  The specified data
 * is sent to the server as parameters.  This is the same as
 * calling xmlOpen("POST", url, toSend, responseHandler).
 *
 * @param string url    The URL to connect to.
 * @param string toSend The data to send to the server; must be URL encoded.
 * @param function responseHandler The Javascript function handling server response.
 */
function xmlPost(url, toSend, responseHandler)
{
    xmlOpen("POST", url, toSend, responseHandler);
}

/**
 * Open a connection to the specified URL, which is
 * intended to provide an XML message.  No other data is
 * sent to the server.  This is the same as calling
 * xmlOpen("GET", url, null, responseHandler).
 *
 * @param string url    The URL to connect to.
 * @param function responseHandler The Javascript function handling server response.
 */
function xmlGet(url, responseHandler)
{
    xmlOpen("GET", url, null, responseHandler);
}

/**
 * Open a connection to the specified URL, which is
 * intended to respond with an XML message.
 * 
 * @param string method The connection method; either "GET" or "POST".
 * @param string url    The URL to connect to.
 * @param string toSend The data to send to the server; must be URL encoded.
 * @param function responseHandler The Javascript function handling server response.
 */
function xmlOpen(method, url, toSend, responseHandler)
{
    if (window.XMLHttpRequest)
    {
        // browser has native support for XMLHttpRequest object
        req = new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {
        // try XMLHTTP ActiveX (Internet Explorer) version
        req = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    if(req)
    {
        req.onreadystatechange = responseHandler;
        req.open(method, url, true);
        req.setRequestHeader("content-type","application/x-www-form-urlencoded");
        req.send(toSend);
    }
    else
    {
        alert('Your browser does not seem to support XMLHttpRequest.');
    }
}
