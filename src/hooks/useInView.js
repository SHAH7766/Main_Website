import {useEffect, useState, useRef} from 'react'

export default function useInView(options){
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(()=>{
    const el = ref.current
    if(!el) return
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          setInView(true)
          obs.unobserve(el)
        }
      })
    }, options)
    obs.observe(el)
    return ()=>obs.disconnect()
  },[ref, options])

  return [ref, inView]
}
