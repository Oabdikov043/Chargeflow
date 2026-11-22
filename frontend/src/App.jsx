import {useEffect,useState} from 'react';
export default function App(){
 const [health,setHealth]=useState('проверка...');
 useEffect(()=>{fetch('/api/health').then(r=>r.json()).then(d=>setHealth(d.status)).catch(()=>setHealth('няма връзка'))},[]);
 return <main><span className="pill">Университетски проект · starter</span><h1>⚡ ChargeFlow</h1><p>Симулация и динамична оптимизация на зарядната мощност за електромобили.</p><section className="panel"><h2>Стартова конфигурация</h2><p><b>Backend:</b> {health}</p><p>Функционалните модули ще се разработват от екипа съгласно архитектурния проект и GitHub Issues.</p></section><footer>Този екран е само начален skeleton. Реални алгоритми, OCPP и база данни все още не са имплементирани.</footer></main>;
}
