import React, { useContext }  from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userContext from '../userContext';
import BlackMenu from '../images/MINI-U.svg'
import signin from '../images/2.svg'
import mousedown from '../images/mouse-cursor.png'
import button2 from '../images/buttons/button2.svg'
import Numbers from './Numbers';
import whatsapp from '../images/whatsapp.png'
import letsContinue from '../images/letscontinue.svg'
import button1 from '../images/buttons/button1.svg'






export default function SignIn() {
  let nav = useNavigate()
  const[section,setSection] = useState(1)
  const[name,setName] = useState('');
  const[phoneNumber,setPhoneNumber] = useState('');
  const[email,setEmail] = useState('');
  const[address,setAddress] = useState('');
  const[website,setWebsite] = useState('')
  const[instagram,setInstagram] = useState('')
  const[faceBook,setFaceBook] = useState('')
  const[tikTok,setTikTok] = useState('')
  const[linkedIn,setLinkedIn] = useState('')
  const[whatsAppNum,setWhatsAppNum] = useState('')
  const[stand,setStand] = useState('')
  const[catalogMenu,setCatalogMenu] = useState('')


 const digitalMenu = ()=>
 {
  fetch('/sendBusinessCard', 
          {
              headers:{
                  "Content-Type": "application/json"
              },
              method:'post',
              body:JSON.stringify({
                  name:name,
                  phoneNumber:phoneNumber,
                  email:email ,
                  address:address,
                  website:website,
                  instagram:instagram,
                  faceBook:faceBook,
                  tikTok:tikTok,
                  linkedIn:linkedIn,
                  whatsAppNum:whatsAppNum,
                  stand:stand,
                  catalogMenu:catalogMenu,
                  type:'Business Card'
              })
          }).then((res)=>{return res.json()})
          .then((data)=>
          {
            if(data == 'done')
            {
              setName('')
              setPhoneNumber('')
              alert('נהדר! ההרשמה הושלמה, נתקשר אליך בקרוב כדי להמשיך בדרך ההצלחה')
              setTimeout(() =>nav("/"), 1500)
            }
            else
            {
              alert('לא נקלט תרענן את הדף ותנסה שוב')
            }
          }).catch((err)=>{return err})
 }

 const toSection2 = ()=>
 {
    if(name == '' || phoneNumber == '' || email == '' || address == '')
    {
      alert('complete all the fields please')
    }
    else
    {
      setSection(2)
    }
 }
 const bodyShow = ()=>
 {
  if(section == 1)
  {
    return <div className='signUpMainDiv' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <img className='LogoForSignUpIn' onClick={()=>{nav('/')}} src={BlackMenu} alt="brothers" />
    <Numbers setSection={setSection} section={section}/>
    <div style={{paddingTop:'0%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h1 className='h1HomeMainTitle' style={{color:'black'}}>استمارة لتبدأ بتطوير مشروعك مع بطاقة عمل</h1>
        <img width={'30%'} className='Arrow'  src={mousedown} alt="" />
        <input  onChange={(e)=>{setName(e.target.value)}} placeholder='الاسم الكامل/اسم المشروع' style={{textAlign:'end'}} className='signUpInput' type="text" />
        <input style={{textAlign:'end'}} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='البريد الالكتروني'  className='signUpInput' type="text" />
        <input style={{textAlign:'end'}} onChange={(e)=>{setPhoneNumber(e.target.value)}}  placeholder='رقم الهاتف'  className='signUpInput' type="text" />
        <input style={{textAlign:'end'}} onChange={(e)=>{setAddress(e.target.value)}}  placeholder='العنوان/البلد'  className='signUpInput' type="text" />
    <img  style={{width:'90%'}} onClick={toSection2}  className='logo' src={button1} alt="" />
    </div>
        <a className='footerFont' href="https://wa.me/972525272910">
        <img src={whatsapp} width={'15%'} alt="whatsapp" />
      </a>
      <h1  className='h3HomeMainTitle' style={{color:'black',fontSize:'15px',alignSelf:'center',marginRight:'0px'}}>خدمة الزبائن</h1>
</div>

  }
  else if(section == 2)
  {
    // setText1('black')
    return  <div className='signUpMainDiv' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <img className='LogoForSignUpIn' onClick={()=>{nav('/')}} src={BlackMenu} alt="brothers" />
    <Numbers setSection={setSection} section={section}/>
    <div style={{paddingTop:'0%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <h1 className='h1HomeMainTitle' style={{color:'black'}}>استمارة لتبدأ بتطوير مشروعك مع بطاقة عمل</h1>
        <img width={'30%'} className='Arrow'  src={mousedown} alt="" />
        <input value={website} style={{textAlign:'end'}} onChange={(e)=>{setWebsite(e.target.value)}}  placeholder='رابط لموقعك على الانترنت'  className='signUpInput' type="text" />
        <input value={whatsAppNum} style={{textAlign:'end'}} onChange={(e)=>{setWhatsAppNum(e.target.value)}}  placeholder='Whatsapp'  className='signUpInput' type="text" />
        <input value={faceBook} style={{textAlign:'end'}} onChange={(e)=>{setFaceBook(e.target.value)}}  placeholder='FaceBook'  className='signUpInput' type="text" />
        <input value={instagram} style={{textAlign:'end'}} onChange={(e)=>{setInstagram(e.target.value)}}  placeholder='Instagram'  className='signUpInput' type="text" />
        <input value={tikTok} style={{textAlign:'end'}} onChange={(e)=>{setTikTok(e.target.value)}}  placeholder='Tik Tok'  className='signUpInput' type="text" />
        <input value={linkedIn} style={{textAlign:'end'}} onChange={(e)=>{setLinkedIn(e.target.value)}}  placeholder='Linked In'  className='signUpInput' type="text" />

    <img  style={{width:'90%'}} onClick={()=>{setSection(3)}}  className='logo' src={button2} alt="" />
    </div>
        <a className='footerFont' href="https://wa.me/972525272910">
        <img src={whatsapp} width={'15%'} alt="whatsapp" />
      </a>
      <h1  className='h3HomeMainTitle' style={{color:'black',fontSize:'15px',alignSelf:'center',marginRight:'0px'}}>خدمة الزبائن</h1>
</div>
  }
  else
  {
    return <div className='signUpMainDiv' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <img className='LogoForSignUpIn' onClick={()=>{nav('/')}} src={BlackMenu} alt="brothers" />
    <Numbers setSection={setSection} section={section}/>
    <div style={{paddingTop:'0%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <h1 className='h1HomeMainTitle' style={{color:'black'}}>استمارة لتبدأ بتطوير مشروعك مع بطاقة عمل</h1>
        <h1 className='h1HomeMainTitle' style={{color:'black'}}>هل انت معني بقاعدة مع<br /> QR Code <br />الخاص ببطاقة العمل<span style={{color:'rgb(214, 194, 173)',borderBottom:'3px solid black', borderBottomRightRadius:'20%',borderBottomLeftRadius:'20%'}}> كهدية</span> </h1>
        <select className='selection' onChange={(e)=>{setStand(e.target.value)}} name="stand" id="stand">
          <option value="0">اختيار</option>
          <option value="yes">نعم</option>
          <option value="no">لا</option>
        </select>
        <h1 className='h1HomeMainTitle' style={{color:'black'}}>هل انت معني ايضًا بقائمة منتجات / قائمة طعام رقمية لمشروعك ؟</h1>
        <select className='selection' onChange={(e)=>{setCatalogMenu(e.target.value)}} name="stand" id="stand">
          <option value="0">اختيار</option>
          <option value="yes">نعم</option>
          <option value="no">لا</option>
        </select>
    <img  style={{marginTop:'60px'}} onClick={digitalMenu}  className='iWantToGrowUp' src={button2} alt="" />
    </div>
        <a className='footerFont' href="https://wa.me/972525272910">
        <img src={whatsapp} width={'15%'} alt="whatsapp" />
      </a>
      <h1  className='h3HomeMainTitle' style={{color:'black',fontSize:'15px',alignSelf:'center',marginRight:'0px'}}>خدمة الزبائن</h1>
</div>
  }
 }


return (
  <div>
  {bodyShow()}
  </div>
)
}
