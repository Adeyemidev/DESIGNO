 import {useForm} from 'react-hook-form'
 import * as yup  from 'yup'
 import {yupResolver} from '@hookform/resolvers/yup'
 export const ContactLayout = ()=>{

 const  onSubmit = (data)=>{
  console.log(data)
 }
 
 const schema = yup.object().shape({
  Name: yup.string().required('required!'),
  Email: yup.string().email().required('required!'),
  Tel: yup.number().positive().integer().required('required!'),
  Message: yup.string().required('required!')

 })

 const {register, handleSubmit, formState: {errors}} = useForm({
resolver: yupResolver(schema)
 });

    return(<>
        <section id='contactLayout' className='lg:flex text-center items-center  justify-center lg:justify-between company md:my-10 md:mx-10 lg:mx-28 md:rounded-xl' style={{padding:'52px 0'}}>
<div className='text-center lg:text-left px-4 lg:pl-16 pb-20 lg:pb-0'>

  <h1 className='text-3xl md:text-5xl font-medium md:font-semibold mb-5'>Contact Us</h1>

<p className='text-center lg:text-left'>Ready to take it to the next level? 
  Let’s talk about your project or idea and find out how we can help your business grow.
   If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
</p>

</div>

<div className="lg:pr-16 px-4 md:px-0 text-center lg:text-right">

<form onSubmit={handleSubmit(onSubmit)} className="outline-none" >
<div className='flex'> <input type='text' placeholder="Name" className=" w-full md:px-4 lg:px-0   pb-4"{...register("Name")} /><br/>
     <span>{errors.Name?.message}</span>
</div>

<div className='flex'><input type='email' placeholder="Email" className="w-full md:px-4 lg:px-0 py-4" {...register("Email")}/><br/>
<span>{ (errors.Tel ? 'required!' : '')}</span>
</div>


<div className='flex'>
<input type='number' placeholder="Phone" className="w-full md:px-4 lg:px-0 py-4"{...register("Tel")} /><br/>
<span>{(errors.Tel ? 'required!' : '')}</span>
</div>

<div className='flex'>
<textarea type='text' placeholder="Message" className="lg:w-96 w-full md:px-4 lg:px-0  py-10" {...register("Message")}/><br/>
<span>{errors.Message?.message}</span>

      </div>

<button type="submit" className='rounded-lg bg-red-300 font-medium text-sm py-4 px-8 mt-6'> SUBMIT</button>

 </form></div>


</section>

</>)
}
