import React, {useState, useRef} from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import Select from 'react-select';
import './buscadorbar.css';

const optionsDepartamentos = [
  { value: 0, label: "Departamento..." },
  { value: "Montevideo", label: "Montevideo" },
  { value: "Canelones", label: "Canelones" },
  { value: "Maldonado", label: "Maldonado" },
];
const optionsTipoInmuebles = [
     { value:0,label:'Tipo de Inmuebles'},

    { value: 'Apartamento', label: 'Apartamento' },
    { value: 'Casa', label: 'Casa' },
    { value: 'Terreno', label: 'Terreno' }
  ] 
  const optionsOperacion = [
    { value:0,label:'Tipo Operacion'},
   { value: 'Venta', label: 'Venta' },
   { value: 'Alquiler', label: 'Alquiler' }
 ] 
  
 

function BuscadorBar(props) {

    const [valorFinalMax, setValorFinalMax ] = useState(0);
    const [valorFinalMin, setValorFinalMin ] = useState(0);

    const[precio_max,setPrecioMax] = useState(0);
    const[precio_min,setPrecioMin] = useState(0);


     console.log('ObjetoSelect: ', props.ObjetoSelect);


  console.log("ObjetoSelect: ", props.ObjetoSelect);
 

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const selectInputRef = useRef();
  const onClear = () => {
    selectInputRef.current.select.clearValue();
  };

  const initial_state = { my_field: "" };

  return (
    <div className="contanedorTemporal">
      {/* react-hook-form
formik
Option: useState para cada valores inputs. */}

    <div  className='barContainer'>
      <form className='formAlito' onSubmit={handleSubmit}>
      
       <div className="formAlitoRow1">

       <div className='elementForm'>
      <Select
        className="basic-single"
        value={props.ObjetoSelect.departamento}
        name="departamentos"
        onChange={(e)=>{console.log(e);
            props.setObjetoSelect({...props.ObjetoSelect,departamento:e})}}
        options={optionsDepartamentos}  
        defaultValue={0}   
        placeholder={'Departamento'}    

      />
      </div> 
  
      <div  className='elementForm'>
        <Select
        ref={selectInputRef}
        inputId={"my_field"}
  
        // className="basic-single"
        value={props.ObjetoSelect.tipo_inmueble}
        name="Tipo de Inmuebles"
        onChange={(e)=>{console.log(e.value);
            props.setObjetoSelect({...props.ObjetoSelect,tipo_inmueble:e})}}
        options={optionsTipoInmuebles}   
        placeholder={'Tipo inmueble'}    
        defaultValue={0}   
        />


      </div>
       <div className='elementForm'>
        <Select
        className="basic-single"
        value={props.ObjetoSelect.tipo_operacion}
        name="Tipo Operacion"
        onChange={(e)=>{console.log(e);
            props.setObjetoSelect({...props.ObjetoSelect,tipo_operacion:e})}}
        options={optionsOperacion}  
        defaultValue={0}   
        placeholder={'Tipo de Operacion'}    

      />
    </div>
        </div>
    <div  className="formAlitoRow2">
        
    <div className="elementForm">
      <div className='rangeSliderPriceMax'> 
        <RangeSlider
        value={props.ObjetoSelect.precio_max}
        tooltipPlacement='top'
        onChange={(e)=>{
        console.log(e);
        props.setObjetoSelect({...props.ObjetoSelect,precio_max:e.target.value});setPrecioMax(e.target.value)
        }}
        min={0}
        size='lg'
        step={5000}
        max={200000}
        onAfterChange={(e) => {console.log('resultado del onAfterChange: ',e);setValorFinalMax(props.ObjetoSelect.precio_max)}}
    />
        <p>Máx. precio: U$S{valorFinalMax.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}</p>
    </div>
    
    
    </div>
    <div className="elementForm">
      <div className='rangeSliderPriceMin'> 
        <RangeSlider
        value={props.ObjetoSelect.precio_min}
        tooltipPlacement='top'
        onChange={(e)=>{
        console.log(e);
        props.setObjetoSelect({...props.ObjetoSelect,precio_min:e.target.value});setPrecioMin(e.target.value)
        }}
        min={0}
        size='lg'
        step={1000}
        max={100000}
        onAfterChange={(e) => {console.log('resultado del onAfterChange: ',e);setValorFinalMin(props.ObjetoSelect.precio_min)}}
    />
        <p>Mín. precio: U$S{valorFinalMin.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}</p>
    </div>
    
    
    </div>
    <div className='buttonForm'>
      <button className='buttonSearch'type="submit"onClick={()=>{console.log('resultado del onClick en Button: '+ props.ObjetoSelect.departamento.value + props.ObjetoSelect.tipo_inmueble.value);
      props.onClickFiltrar(
        {
          "departamento":props.ObjetoSelect.departamento,
          "tipo_inmueble": props.ObjetoSelect.tipo_inmueble,
          "tipo_operacion": props.ObjetoSelect.tipo_operacion,
          "precio_max": props.ObjetoSelect.precio_max,
          "precio_min": props.ObjetoSelect.precio_min

        })
        }}>Buscar
      </button>
      </div> 
    </div>
        
       
      
        
      </form>
    </div>              
        
    </div>
  );
}

export default BuscadorBar;
