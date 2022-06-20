import NProgress from 'nprogress'


export function progressBarConfig() {
   NProgress.configure({
      template: `
         <div class="overlay"> 
            <div class="bar" role="bar">
                <div class="peg"></div>
             </div>
             <div class="spinner" role="spinner">
                <div class="spinner-icon"></div>
             </div>
           </div>`
   });
   NProgress.configure({ easing: 'ease', speed: 500 })
   NProgress.configure({ showSpinner: false })

   return NProgress
}