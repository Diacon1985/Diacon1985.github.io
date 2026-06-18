function writeMessage() {
    const email = "service.itech@gmail.com"
    const subject = encodeURIComponent(
        "Interested in adopting"
    );

    const body = encodeURIComponent(
        "Hello,\n\n"+
        "I am interested in adopting one of the kittens\n\n" + 
        "Please provide more information.\n\n" + 
        "Thank you."
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
