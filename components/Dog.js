class Dog {
    constructor(data) {
      Object.assign(this, data);
    }
    
    renderTextHTML() {
      const {name,age,bio} = this;
        return `
          <h2>${name}, ${age}</h2>
          <p>${bio}</p>`
    }
    
    renderImageHTML(){
      const {avatar} = this;      
        document.getElementById("main-content").style.backgroundImage = `url(${avatar})`;
    }
  }
  
  export { Dog };
  