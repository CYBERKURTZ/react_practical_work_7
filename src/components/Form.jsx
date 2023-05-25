import React from 'react'
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css'
import axios from 'axios'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
  CircleMarker,
  Polygon
} from 'react-leaflet'

const colorOptions = {color: '#cc241d'}
const centerPolygon=[
  [
    [55.769544, 37.565631],
    [55.725365, 37.565847],
    [55.739587, 37.608312],
    [55.787007, 37.679850]
  ]
]
const center=[55.75224503860475, 37.617498868078336]

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/form', data)
    alert('Заявка отправлена')
    console.log(data);
  return (
    <div>
      <form id='form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Заполните заявку на обратную связь</h1>
      <div className="input-group mb-3">
        <input {...register('lastName', {
          required: true,
          maxLength:50,
          pattern: /^[А-Яа-я]+$/i
        })}
        type="text"
        className='form-control'
        placeholder='Фамилия'/>
      </div>
      {errors?.lastName?.type === 'required'&&(
        <p>Поле обязательно для заполнения</p>
      )}
      {errors?.lastName?.type === 'maxLength'&&(
        <p>Поле не может содержать более 50 символов</p>
      )}
      {errors?.lastName?.type === 'pattern'&&(
        <p>Поле заполнено некорректно</p>
      )}
      <div className="input-group mb-3">
        <input {...register('firstName', {
          required: true,
          maxLength:50,
          pattern: /^[А-Яа-я]+$/i
        })}
        type="text"
        className='form-control'
        placeholder='Имя'/>
      </div>
      {errors?.firstName?.type === 'required'&&(
        <p>Поле обязательно для заполнения</p>
      )}
      {errors?.firstName?.type === 'maxLength'&&(
        <p>Поле не может содержать более 50 символов</p>
      )}
      {errors?.firstName?.type === 'pattern'&&(
        <p>Поле заполнено некорректно</p>
      )}
      <div className="input-group mb-3">
        <input {...register('patronymic', {
          required: true,
          maxLength:50,
          pattern: /^[А-Яа-я]+$/i
        })}
        type="text"
        className='form-control'
        placeholder='Отчество'/>
      </div>
      {errors?.patronymic?.type === 'required'&&(
        <p>Поле обязательно для заполнения</p>
      )}
      {errors?.patronymic?.type === 'maxLength'&&(
        <p>Поле не может содержать более 50 символов</p>
      )}
      {errors?.patronymic?.type === 'pattern'&&(
        <p>Поле заполнено некорректно</p>
      )}
      <div className="input-group mb-3">
        <input {...register('email', {
          required: true,
          maxLength:50,
          pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i
        })}
        type="email"
        className='form-control'
        placeholder='Email'/>
      </div>
      {errors?.email?.type === 'required'&&(
        <p>Поле обязательно для заполнения</p>
      )}
      {errors?.email?.type === 'maxLength'&&(
        <p>Поле не может содержать более 50 символов</p>
      )}
      {errors?.email?.type === 'pattern'&&(
        <p>Поле заполнено некорректно</p>
      )}
        <input className='btn btn-outline-primary' type="submit" />
      </form>
      <br></br>
      <MapContainer
        center={center}
        zoom={10}
        style={{
          width: '100vw',
          height: "500px"
        }}
        >
          <TileLayer
          url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=tHNnlPaQTDloUqgCUOZs'
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          />
          <CircleMarker
            center={center}
            pathOptions={{color:'black'}}
            radius={10}
          />
          <Marker position={center}>
            <Popup>Мы находимся здесь</Popup>
            <Tooltip>Мы находимся здесь</Tooltip>
          </Marker>
          <Polygon positions={centerPolygon} pathOptions={colorOptions}/>
      </MapContainer>
    </div>
  );
}

export default Form