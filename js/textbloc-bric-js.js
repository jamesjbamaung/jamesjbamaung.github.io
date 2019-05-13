$(document).ready(function()
{ 
  try{
    Textblock([{
      target: 'tbloc-default',
      minWidthFontSize: 1.2,
      maxWidthFontSize: 2.6,
      minWidthLineHeight: 1.33,
      maxWidthLineHeight: 1.25,
      minWidth: 200,
      maxWidth: 1600,
      container: 'parent',
      units: 'em'
    },
    {
      target: 'tbloc-default',
      minWidthFontSize: 1.2,
      maxWidthFontSize: 2.6,
      minWidthLineHeight: 1.33,
      maxWidthLineHeight: 1.25,
      minWidth: 200,
      maxWidth: 1600,
      container: 'parent',
      units: 'em'
    },
    {
      target: 'tbloc-default',
      minWidthFontSize: 1.2,
      maxWidthFontSize: 2.6,
      minWidthLineHeight: 1.33,
      maxWidthLineHeight: 1.25,
      minWidth: 200,
      maxWidth: 1600,
      container: 'parent',
      units: 'em'
    },
    {
      target: 'tbloc-default',
      minWidthFontSize: 1.2,
      maxWidthFontSize: 2.6,
      minWidthLineHeight: 1.33,
      maxWidthLineHeight: 1.25,
      minWidth: 200,
      maxWidth: 1600,
      container: 'parent',
      units: 'em'
    }]);
  } catch(e){
      console.log("TextBloc error ----- " + e);
  }
});