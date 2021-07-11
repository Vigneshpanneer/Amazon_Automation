class baseUtils{
    CliBtn(element){
    element.click();
}
    toaddValue(element,text){
   // element.waitForDisplayed();
    element.addValue(text);

}
    togettext(text){
 //  element.waitForDisplay();
   return element.gettext(text);
}
/*toaddValue(element){
    // element.waitForDisplayed();
     element.addValue(element);
}*/
    classNameAndText(text){
    return element.classNameAndText();
}
    toHaveText(element,text){
    // element.waitForDisplayed();
    return element.HaveText(text);
 
 }
}
module.exports = new baseUtils();