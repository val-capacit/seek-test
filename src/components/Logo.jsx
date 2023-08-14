
import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8'
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        /*fill="none"*/ /*til animation fjern fill="black" og skift til 'none'*/
        fill="black"
        strokeWidth="1.5"
      />
      <defs>
 
        <path
          id={`${id}-path`}
          /*
          d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
        */
       /*
          d="M22.4,30.1H8.2c-4.3,0-7.7-3.5-7.7-7.7V8.2C0.5,4,4,0.5,8.2,0.5h14.2c4.3,0,7.7,3.5,7.7,7.7v14.2
          C30.1,26.7,26.7,30.1,22.4,30.1z M16.7,11.8c-0.2,0-0.5,0-0.7,0.1c-2.2,0.3-3.9,2.1-4.1,4.3c0,0.2,0,0.3,0,0.5
          c0,2.7,2.2,4.9,4.9,4.9c2.7,0,4.9-2.2,4.9-4.9S19.4,11.8,16.7,11.8z M13.4,10.4c-0.2,0-0.4,0-0.6,0.1c-1.2,0.2-2.2,1.2-2.4,2.4
          c0,0.2-0.1,0.4-0.1,0.6c0,1.1,0.6,2.1,1.5,2.7c0.2-2.2,1.9-4,4.1-4.3C15.4,10.9,14.5,10.4,13.4,10.4z M10.9,9.1C9.9,9.1,9,10,9,11
          c0,0.8,0.5,1.6,1.3,1.8c0.2-1.2,1.2-2.2,2.4-2.4C12.5,9.7,11.8,9.1,10.9,9.1z"
          */
          d="M49.5,19.1c0-0.6-0.2-1-0.5-1.3c-0.3-0.3-0.8-0.6-1.3-0.8c-0.5-0.2-1-0.4-1.6-0.6c-0.6-0.2-1.1-0.5-1.6-0.8
          c-0.5-0.3-0.9-0.7-1.3-1.2c-0.3-0.5-0.5-1.2-0.5-2c0-1.4,0.4-2.4,1.2-3c0.8-0.6,1.8-0.9,3.2-0.9c1,0,1.9,0.1,2.6,0.3
          c0.7,0.2,1.3,0.4,1.8,0.6l-0.5,1.9c-0.4-0.2-1-0.4-1.6-0.6c-0.6-0.2-1.3-0.2-2-0.2c-0.8,0-1.4,0.1-1.8,0.4c-0.4,0.3-0.6,0.8-0.6,1.5
          c0,0.5,0.2,0.9,0.5,1.1c0.3,0.3,0.8,0.5,1.3,0.7c0.5,0.2,1,0.4,1.6,0.6c0.6,0.2,1.1,0.5,1.6,0.8c0.5,0.3,0.9,0.8,1.3,1.3
          c0.3,0.5,0.5,1.2,0.5,2.1c0,0.6-0.1,1.2-0.3,1.7c-0.2,0.5-0.5,1-0.9,1.4c-0.4,0.4-0.9,0.7-1.5,0.9c-0.6,0.2-1.3,0.3-2.2,0.3
          c-1.1,0-2-0.1-2.7-0.3c-0.8-0.2-1.4-0.5-1.9-0.7l0.7-1.9c0.4,0.2,1,0.5,1.7,0.7c0.7,0.2,1.4,0.3,2.1,0.3c0.8,0,1.5-0.2,2-0.5
          C49.2,20.5,49.5,19.9,49.5,19.1z M65.5,21.8c-0.6,0.5-1.3,0.8-2.1,1.1c-0.9,0.3-1.8,0.4-2.7,0.4c-1.1,0-2-0.2-2.8-0.5
          c-0.8-0.3-1.4-0.8-2-1.5c-0.5-0.7-0.9-1.4-1.1-2.3c-0.2-0.9-0.4-1.9-0.4-3.1c0-2.4,0.5-4.3,1.6-5.5c1.1-1.3,2.6-1.9,4.6-1.9
          c0.6,0,1.3,0.1,1.9,0.2c0.6,0.1,1.2,0.4,1.7,0.8s0.9,1,1.2,1.7c0.3,0.7,0.5,1.7,0.5,2.9c0,0.6-0.1,1.3-0.2,2.1l-9.1,0
          c0,0.8,0.1,1.6,0.3,2.2c0.2,0.6,0.4,1.2,0.8,1.6c0.4,0.4,0.8,0.8,1.4,1c0.6,0.2,1.3,0.4,2.1,0.4c0.6,0,1.3-0.1,1.9-0.3
          c0.6-0.2,1.1-0.5,1.4-0.8L65.5,21.8z M60.6,10.4c-1.1,0-2,0.3-2.7,0.9c-0.7,0.6-1.1,1.6-1.2,3l7,0c0-1.4-0.3-2.4-0.8-3
          C62.4,10.7,61.6,10.4,60.6,10.4z M79.5,21.8c-0.6,0.5-1.3,0.8-2.1,1.1c-0.9,0.3-1.8,0.4-2.7,0.4c-1.1,0-2-0.2-2.8-0.5
          c-0.8-0.3-1.4-0.8-2-1.5c-0.5-0.7-0.9-1.4-1.1-2.3c-0.2-0.9-0.4-1.9-0.4-3.1c0-2.4,0.5-4.3,1.6-5.5c1.1-1.3,2.6-1.9,4.6-1.9
          c0.6,0,1.3,0.1,1.9,0.2c0.6,0.1,1.2,0.4,1.7,0.8c0.5,0.4,0.9,1,1.2,1.7c0.3,0.7,0.5,1.7,0.5,2.9c0,0.6-0.1,1.3-0.2,2.1l-9.1,0
          c0,0.8,0.1,1.6,0.3,2.2c0.2,0.6,0.4,1.2,0.8,1.6c0.4,0.4,0.8,0.8,1.4,1c0.6,0.2,1.3,0.4,2.1,0.4c0.6,0,1.3-0.1,1.9-0.3
          c0.6-0.2,1.1-0.5,1.4-0.8L79.5,21.8z M74.7,10.4c-1.1,0-2,0.3-2.7,0.9c-0.7,0.6-1.1,1.6-1.2,3l7,0c0-1.4-0.3-2.4-0.8-3
          C76.4,10.7,75.7,10.4,74.7,10.4z M87.2,16.6l-1.3,0l0,6.4l-2.3,0l0-19.8l2.3,0l0,12.1l1.2-0.4l4.4-6l2.6,0l-4.3,5.7l-1.2,0.9
          l1.4,1.1l4.7,6.4l-2.8,0L87.2,16.6z M21.9,0H7.7C3.5,0,0,3.5,0,7.7v14.2c0,4.3,3.5,7.7,7.7,7.7h14.2c4.3,0,7.7-3.5,7.7-7.7V7.7
          C29.6,3.5,26.2,0,21.9,0z M16.5,22.6c-3.4,0-6.1-2.8-6.1-6.2c0-0.2,0-0.4,0-0.7c-1.2-0.7-1.9-1.9-1.9-3.3c0-0.3,0-0.5,0.1-0.8
          c-1-0.3-1.6-1.2-1.6-2.3C6.9,8.1,8,7,9.3,7c1,0,2,0.7,2.3,1.6c0.2-0.1,0.5-0.1,0.8-0.1c1.4,0,2.6,0.7,3.3,1.8
          c0.3-0.1,0.6-0.1,0.9-0.1c3.4,0,6.1,2.8,6.1,6.2C22.7,19.9,19.9,22.6,16.5,22.6z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  /*filled=false*/ /*til animation fjern filled="true" og skift til 'false'*/
  filled = true,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      /* viewBox="0 0 130 32" */ 

      viewBox="0 0 130 16" 

      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />

      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        
        /*
          d="M52.928 23.716c5.184 0 7.992-1.992 7.992-5.28 0-3.888-2.688-4.8-7.512-5.376-3.36-.408-4.728-.672-4.728-2.448 0-1.464 1.44-2.376 3.912-2.376 2.4 0 3.936.864 4.104 2.784h3.576c-.24-3.288-3-5.232-7.536-5.232-4.728 0-7.68 1.896-7.68 5.208 0 3.48 2.712 4.464 7.416 5.04 3.216.408 4.8.648 4.8 2.664 0 1.584-1.392 2.544-4.224 2.544-3.048 0-4.68-1.176-4.752-3.288H44.6c.072 3.408 2.616 5.76 8.328 5.76Zm14.175-.216h3.312v-2.928h-1.968c-.84 0-1.272-.24-1.272-1.104v-6.144h3.24v-2.592h-3.24V6.676l-3.36.648v3.408h-2.496v2.592h2.496v7.2c0 2.04 1.248 2.976 3.288 2.976Zm10.078.216c2.16 0 4.104-1.008 4.944-2.64h.168l.144 2.424h3.288V10.732h-3.432v6.336c0 2.4-1.584 4.032-3.984 4.032-2.328 0-3.264-1.368-3.264-3.936v-6.432h-3.432v7.032c0 4.416 2.256 5.952 5.568 5.952Zm16.24.048c2.52 0 4.2-1.008 4.944-2.496h.168l.072 2.232h3.264V6.004h-3.408v7.008h-.168c-.792-1.56-2.592-2.52-4.848-2.52-3.816 0-6.384 2.592-6.384 6.624 0 4.056 2.568 6.648 6.36 6.648Zm1.032-2.616c-2.472 0-3.96-1.536-3.96-4.032s1.488-4.008 3.96-4.008 3.984 1.512 3.984 3.648v.744c0 2.136-1.536 3.648-3.984 3.648Zm9.485-12.216h3.408V6.004h-3.408v2.928Zm0 14.568h3.408V10.732h-3.408V23.5Zm12.481.24c4.584 0 7.56-2.52 7.56-6.624 0-4.152-3-6.624-7.56-6.624s-7.56 2.52-7.56 6.624c0 4.128 3.024 6.624 7.56 6.624Zm0-2.64c-2.592 0-4.128-1.56-4.128-3.984s1.536-3.984 4.128-3.984c2.616 0 4.152 1.536 4.152 3.984 0 2.424-1.56 3.984-4.152 3.984Zm8.794 2.4h3.384v-2.88h-3.384v2.88Z"
    */
  /*
          d="M5.3,11.6c0-0.4-0.1-0.7-0.4-1c-0.2-0.2-0.6-0.4-0.9-0.6C3.7,9.9,3.3,9.8,2.8,9.6C2.4,9.5,2,9.3,1.6,9
          C1.3,8.8,1,8.5,0.7,8.2C0.5,7.8,0.4,7.3,0.4,6.7c0-1,0.3-1.7,0.8-2.2c0.6-0.5,1.3-0.7,2.3-0.7c0.7,0,1.4,0.1,1.9,0.2
          c0.5,0.1,0.9,0.3,1.3,0.5L6.3,5.9C6,5.7,5.6,5.6,5.2,5.5C4.7,5.4,4.3,5.3,3.8,5.3c-0.6,0-1,0.1-1.3,0.3C2.1,5.8,2,6.2,2,6.7
          C2,7,2.1,7.3,2.4,7.5c0.2,0.2,0.6,0.4,0.9,0.5C3.7,8.2,4,8.4,4.5,8.5c0.4,0.2,0.8,0.4,1.2,0.6C6,9.4,6.3,9.7,6.6,10.1
          C6.8,10.4,7,10.9,7,11.6c0,0.4-0.1,0.9-0.2,1.2c-0.1,0.4-0.4,0.7-0.7,1c-0.3,0.3-0.7,0.5-1.1,0.6c-0.4,0.2-1,0.2-1.6,0.2
          c-0.8,0-1.4-0.1-2-0.2c-0.5-0.2-1-0.3-1.4-0.5l0.5-1.4c0.3,0.2,0.7,0.3,1.2,0.5c0.5,0.2,1,0.2,1.5,0.2c0.6,0,1.1-0.1,1.5-0.4
          C5.1,12.6,5.3,12.2,5.3,11.6z M17,13.6c-0.4,0.3-0.9,0.6-1.6,0.8c-0.6,0.2-1.3,0.3-2,0.3c-0.8,0-1.5-0.1-2-0.4
          c-0.6-0.3-1.1-0.6-1.4-1.1c-0.4-0.5-0.6-1-0.8-1.7C9,10.8,8.9,10.1,8.9,9.3c0-1.8,0.4-3.1,1.2-4c0.8-0.9,1.9-1.4,3.4-1.4
          c0.5,0,0.9,0.1,1.4,0.2c0.5,0.1,0.9,0.3,1.3,0.6s0.7,0.7,0.9,1.2c0.2,0.5,0.3,1.2,0.3,2.1c0,0.5,0,1-0.1,1.5l-6.6,0
          c0,0.6,0.1,1.1,0.2,1.6c0.1,0.5,0.3,0.9,0.6,1.2c0.3,0.3,0.6,0.6,1,0.7c0.4,0.2,0.9,0.3,1.5,0.3c0.5,0,0.9-0.1,1.4-0.2
          c0.5-0.2,0.8-0.4,1.1-0.6L17,13.6z M13.4,5.3c-0.8,0-1.5,0.2-1.9,0.6c-0.5,0.4-0.8,1.2-0.9,2.2l5.1,0c0-1-0.2-1.8-0.6-2.2
          C14.7,5.5,14.2,5.3,13.4,5.3z M27.2,13.6c-0.4,0.3-0.9,0.6-1.6,0.8c-0.6,0.2-1.3,0.3-2,0.3c-0.8,0-1.5-0.1-2-0.4
          c-0.6-0.3-1.1-0.6-1.4-1.1c-0.4-0.5-0.6-1-0.8-1.7c-0.2-0.7-0.3-1.4-0.3-2.2c0-1.8,0.4-3.1,1.2-4c0.8-0.9,1.9-1.4,3.4-1.4
          c0.5,0,0.9,0.1,1.4,0.2c0.5,0.1,0.9,0.3,1.3,0.6c0.4,0.3,0.7,0.7,0.9,1.2c0.2,0.5,0.3,1.2,0.3,2.1c0,0.5,0,1-0.1,1.5l-6.6,0
          c0,0.6,0.1,1.1,0.2,1.6c0.1,0.5,0.3,0.9,0.6,1.2c0.3,0.3,0.6,0.6,1,0.7c0.4,0.2,0.9,0.3,1.5,0.3c0.5,0,0.9-0.1,1.4-0.2
          c0.5-0.2,0.8-0.4,1.1-0.6L27.2,13.6z M23.7,5.3c-0.8,0-1.5,0.2-1.9,0.6c-0.5,0.4-0.8,1.2-0.9,2.2l5.1,0c0-1-0.2-1.8-0.6-2.2
          C25,5.5,24.4,5.3,23.7,5.3z M32.8,9.8l-0.9,0l0,4.6l-1.6,0l0-14.4l1.6,0l0,8.8l0.8-0.3l3.2-4.4l1.9,0l-3.2,4.1l-0.8,0.7l1,0.8
          l3.4,4.7l-2,0L32.8,9.8z"*/
    />
    </svg>
  )
}
