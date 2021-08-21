import React from "react";
import {BrowserView, MobileView} from 'react-device-detect';


class Status extends React.Component{
    render(){
    return(
        <div>
            <BrowserView>
            Content rendered on Website
            </BrowserView>
            <MobileView>
                Content rendered on Mobile
            </MobileView>
        </div>
    )
}
}
 export default Status;