## 18 The OAuth Flow
    client - server - google
    server is node doing things

    redirect the user   to google.com/auth?appid=123
    google will show permission to let this app will have access

    user grants permission (when ppl go to google page to click yes)

    google automatically re-directs the user to google/callback?code=456
        parameter code is important to us
    google will put that code inside url, using the code to make followup request that will send to google.
        the code is important becasue the server(me) will send the code to google for verification
        to the user who granted permission and send user info
    record the user
    set user id in cookie for this user
    kick user back to localhost:3000

    further userflow after  this point, past OAuth.

## 19. Overview of Passport JS
    helper, passport JS that will take care of some actions
    passport will make us reach for very specific things to make it work smoothly

    --passport js will almost automate, but can be very confusing, hard to see the big picture

    library structure is confusing

    when discussing passport, we mean passport + passport strategy
    passport: General helpers for handling auth in Express apps
    passport strategy: Helpers for authenticating with one very specific method (email/passport, google, facebook, etc)
    understand what you are installing
        if I want to use multiple OAuth, it means we will need multiple passport strategy

## 20. Passport Setup