
  $(function(){
    $('#theme-selector').change(function () {
        var theme =  $('#theme-selector').val();
        $("#theme-name").attr('href', 'src/themes/'+theme+'.css');
    })
    $('#basic-alert').on('click', function(){
       XSAlert({
         title: "Ouch!",
         message: "Something's just not right at the moment",
         icon: 'error',
         hideCancelButton: true,
         footer: '<a href="#">Click here for more info</a>'
      })
    })
    $('#bg-img').on('click', function(){
        XSAlert({
         title: "Wow, I've got a custom background image 🤩",
         hideCancelButton: true,
         overlayImageURL: 'https://source.unsplash.com/Ta5II09WSrA/2400x1600'
      })
    })
    $('#top-right').on('click', function(){
        XSAlert({
   title: "Hey, I'm here! ↗️",
   position: 'top-right',
   hideCancelButton: true
})
    })
    $('#basic-confirm').on('click', function(){
        XSAlert({
         title: 'Hey you',
         message: "What's your favorite drink? 👇",
         okButtonText: '🍷 Wine',
         cancelButtonText: "🚫 I don't drink",
         thirdButtonText: "🍹 Tropical Drink",
         closeOnOutsideClick: true,

       }).then((result) => {
         if(result == 'ok') { XSAlert({ message: 'Your fav drink is '+$('#xs-ok-btn').text(), backgroundColor: '#e57373' })
         } else if(result == 'third') { XSAlert({ message: 'Your fav drink is '+$('#xs-third-btn').text(), backgroundColor: '#ffc107' }) }
      })
    })
    $('#basic-prompt').on('click', function(){
       XSAlert({
         title: "Hi there 👋",
         message: "What's your name",
         inputType: 'text',
         inputPlaceholder: 'Ex: Frank Eno',
         cancelButtonText: 'Forget it'
       }).then((result) => {
         if(result == 'ok'){
            if($('#xs-input').val() == '') { XSAlert({ message: "How come you don't have a name? 🤔"})
            } else { XSAlert({ title: 'Nice!', message: 'Your name is "'+$('#xs-input').val()+'"' }) }
         } else if(result == 'cancel' || result == 'outside'){ XSAlert({ message: "It's ok if you don't wanna tell me your name 😉" }) }
      })
    })



    $('#auto-close').on('click',function(){
       XSAlert({
   title: "Hi there 😎",
   message: "Hold on, I'm gonna close in 2 seconds...",
   autoCloseTimer: 2000,
   hideProgressBar: false, // 'true' to hide
   hideProgressIcon: false, // 'true' to hide
   hideOkButton: true,
   hideCancelButton: true
   // You can also perform an action after cllosing the alert
 }).then((result) => {
   if(result == 'autoClosed') {
      XSAlert({message: 'Alert has closed automatically!', hideCancelButton: true, closeOnOutsideClick: true })
   }
})
    })
   });