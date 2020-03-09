import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Contact from './components/Contact';
import Newcontact from './components/Newcontact';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contactsNotes: [   
        
      ],
      viewContacts: true,
      cntctName: '',
      contactPhone: '',
      filterSrch: '',
      err:'',
      viewChange: true
    };
    this.removeContact = this.removeContact.bind(this);
    this.addNewContact = this.addNewContact.bind(this);
    this.getContactName = this.getContactName.bind(this);
    this.getContactPhone = this.getContactPhone.bind(this);
    this.pushNewContact = this.pushNewContact.bind(this);
    this.valueFilterSrch = this.valueFilterSrch.bind(this);
  }

  removeContact(index) {
    let contactsCopy = [...this.state.contactsNotes];
    contactsCopy = contactsCopy.filter(item => item.id !== index);
    this.setState({contactsNotes: contactsCopy });
  };

  valueFilterSrch(e){
    this.setState({filterSrch: e.target.value});
    console.log(e.target.value);
  }

  addNewContact(){
    this.setState({viewContacts: !this.state.viewContacts})
  }

  getContactName(e){
    this.setState({cntctName: e.target.value})
    console.log(e.target.value)
  }

  getContactPhone(e){
    this.setState({contactPhone: e.target.value})
  }

  pushNewContact(e){
    e.preventDefault();
    let contactsCopy = [...this.state.contactsNotes];
    const name = this.state.cntctName;
    const phone = this.state.contactPhone;
    if (!name || !phone) {
			this.setState({err:"Empty fields"})
		}else if (!name.match(/[a-zA-Z]/g)) {
      this.setState({err:"Name should contain only letters"})
      
    }else if (!phone.match(/^\d+$/)) {
      this.setState({err:"Phone should contain only digits"})
    }else{
    let obj = {
      name: this.state.cntctName,
      phone: this.state.contactPhone,
      id: Date.now()
    };    
    contactsCopy.push(obj);
    this.setState({contactsNotes: contactsCopy, viewContacts: !this.state.viewContacts, cntctName:'', contactPhone:'', err:''});
  }
    // console.log(contactsCopy)
  }



  render() {
    let contactsCopy = [...this.state.contactsNotes];
    const filterContacts = contactsCopy.filter(item => {
      return item.name.toLowerCase().includes(this.state.filterSrch.toLowerCase());
    });
    // this.state.viewContacts ?
    return this.state.viewContacts ? (
      <div className="main">
     <Header />
     <Input filterContct = {this.valueFilterSrch} />
     <div className="allContacts">
       {filterContacts.map((item) => 
       <Contact Name={item.name} 
        Phone={item.phone} 
        deleteContact={this.removeContact} 
        Key={item.id} 
       />)}
     </div>
     <div className="addDiv"> 
       <button id = "addContact" onClick = {this.addNewContact}>ADD CONTACT</button>
     </div>
   </div>
   ) :
   (
    <Newcontact 
    setNewContact = {this.pushNewContact}
    setContactName = {this.getContactName}
    setPhone = {this.getContactPhone}
    setErr = {this.state.err}
    />
   );
   
  }
}
export default App;
