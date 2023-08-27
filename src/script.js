c = document.querySelector('#c')
c.width = 1920
c.height = 1080
x = c.getContext('2d')
C = Math.cos
S = Math.sin
t = 0
T = Math.tan

rsz=window.onresize=()=>{
  setTimeout(()=>{
    if(document.body.clientWidth > document.body.clientHeight*1.77777778){
      c.style.height = '100vh'
      setTimeout(()=>c.style.width = c.clientHeight*1.77777778+'px',0)
    }else{
      c.style.width = '100vw'
      setTimeout(()=>c.style.height =     c.clientWidth/1.77777778 + 'px',0)
    }
  },0)
}
rsz()

async function Draw(){

x.fillRect(0,0,w=2e3,w,P=t?P.filter(v=>v[0]):[[h=1e3,0,0,0]]);P.map(v=>{x.clearRect(X=v[0]+=v[2],Y=v[1]+=m=v[3]++,m,m);if(Y>h||X>w||X<0)for(;v[0]=P.length<w;)P.push([X,Y,S(m-=t%.03)*m,C(m)*m])})
  
  
  t+=1/60
  requestAnimationFrame(Draw)
}
Draw()