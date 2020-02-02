import React from "react";

export default function NoticeContent({currentTab, componentsSwitch}){
  return(
  <>
    {componentsSwitch(currentTab)}
  </>
);
}
