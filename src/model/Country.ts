interface names {
  common:string
};

interface flagss{
  png:string
};

class Country {
    id: string;
    name: names;
    email: string;
    telephone: string;
    flag: string;
    flags : flagss
    constructor(name: names, email: string, telephone: string, id: string, flag:string, flags:flagss) {
      this.name = name;
      this.email = email;
      this.telephone = telephone;
      this.id = id;
      this.flag = flag;
      this.flags = flags;
    }
  }
  
  export default Country;