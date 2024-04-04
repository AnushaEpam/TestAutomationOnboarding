function isEmailValid(email){
    if(email.length > 64)
        console.log("The length of email is greater than 64")

    if(email.includes('@'))
    {
        const parts = email.split('@');
        console.log(parts)
        if (parts.length == 2) {
            console.log("valid - has only one @")
            const [recipientName, domain] = parts;
            const recipientRegex = /^[A-Za-z0-9!#$%&'*+\-/=?^_`{|}~]+(\.[A-Za-z0-9!#$%&'*+\-/=?^_`{|}~]+)*$/;
            if (!recipientName) {
                console.log("Not valid - missing recipient name");
                return;
            }
            else if (!recipientRegex.test(recipientName)) {
                console.log("Not valid - Recipient name contains invalid characters or patterns");
                return;
            }
            if(domain.includes('.')){
                const domainParts = domain.split('.')
                console.log(domainParts)
                if (domainParts.length >=2) {
                  const domainName = domainParts[0]
                  const topLevelDomain = domainParts[1]
                  if (!domainName || !topLevelDomain) {
                    console.log("Not valid - missing Domain name or top level domain name");
                    return;
                }
                }
                console.log("Valid - Has recipient name, domain, and top-level domain")
            }
            else{
                console.log("not valid - has no '.'")
            }
           
        }
        else{
            console.log("not valid - has many @")
        }
    }
    else{
        console.log("Not a valid email does not have @")
    }
    
   
}

isEmailValid("tes..t@new.com")