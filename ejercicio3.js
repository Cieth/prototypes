String.prototype.palindrome = function palindrome() {
    return this.toLowerCase().replace(/([^A-Za-z0-9])/g, "") === 
     this.toLowerCase().split("").reverse("").join("").replace(/([^A-Za-z0-9])/g, "");
};
