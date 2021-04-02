<template>
  <i ref="imgEl" />
</template>

<script>

export default {
    name: "svg-img",
    beforeMount() {
      this.loadImg();
      svgElData: ''
    },
  methods: {
    loadImg(){

      let src = this.$attrs.src || this.$attrs['data-src'] || null;

      if(src == null){
          this.$emit("on-error",new Error('attr_src_required'))
          return;
      }

      var ajax = new XMLHttpRequest() || new ActiveXObject("Msxml2.XMLHTTP") || new ActiveXObject("Microsoft.XMLHTTP");
      
        ajax.open("GET", src , true);
        ajax.send(null);

        ajax.onload = (e) => {
          
            if (ajax.readyState === XMLHttpRequest.DONE && (ajax.status >= 200 &&  ajax.status < 300)) {

              //process response text
              this.processImg(ajax.responseText)

              //send success 
              this.$emit("on-success",{data: ajax.responseText})

            } else {

              this.$emit("on-error",new Error('non_200_request_status'))

            }
        }

        //on error
        ajax.onerror = (err) => this.$emit("on-error",err)
    },

    //process the data 
    processImg(svgData){

        let attrs = {...this.$attrs};

        let el = document.createElement('div')
        
        el.innerHTML = svgData;
        
        let imgEl = this.$refs.imgEl;

        let svgEl = el.querySelector("svg")

        if(!svgEl){
          this.$emit("on-error",new Error('no_svg_data_found'))
          return;
        }

        //lets get svg classes 
        let svgElClasses = Array.from(svgEl.classList);
        
        //delete src and data-src fields
        delete attrs['src'];
        delete attrs['data-src'];

        if(svgEl) {
          
          //lets get the svg  and replace the attrs 
          Object.keys(attrs).forEach(name => {

            let value = attrs[name]

              if(name == 'class'){ 
                svgElClasses = [...svgElClasses, ...value.split(" ")]; 
                return;
              }

              svgEl.setAttribute(name, value)
          })
        }

        
        svgEl.setAttribute("class",svgElClasses.join(" "));

        //console.log(svgEl.outerHTML)

        imgEl.parentNode.innerHTML = el.innerHTML;
    }

  },

}
</script>
