// Simple interactive 2-link robot arm + small quiz
(function(){
const canvas = document.getElementById('robotCanvas');
const ctx = canvas.getContext('2d');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a1val = document.getElementById('a1val');
const a2val = document.getElementById('a2val');
const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');
const coords = document.getElementById('coords');
const randomBtn = document.getElementById('randomBtn');
const resetBtn = document.getElementById('resetBtn');
function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);
const cx = canvas.width/2;
const cy = canvas.height - 20;
const ang1 = parseFloat(a1.value) * Math.PI/180;
const ang2 = parseFloat(a2.value) * Math.PI/180;
const L1 = parseFloat(l1.value);
const L2 = parseFloat(l2.value);
// base
ctx.fillStyle = '#0b4';
ctx.beginPath(); ctx.arc(cx,cy,6,0,Math.PI*2); ctx.fill();


// first link
const x1 = cx + Math.cos(-ang1 + Math.PI/2)*L1;
const y1 = cy + Math.sin(-ang1 + Math.PI/2)*L1;
ctx.lineWidth = 10; ctx.lineCap = 'round';
ctx.strokeStyle = '#9b5cff';
ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(x1,y1); ctx.stroke();


// second link
const x2 = x1 + Math.cos(-ang1 - ang2 + Math.PI/2)*L2;
const y2 = y1 + Math.sin(-ang1 - ang2 + Math.PI/2)*L2;


ctx.strokeStyle = '#6fd3ff'; ctx.lineWidth = 8;
ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
// joints
ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x1,y1,6,0,Math.PI*2); ctx.fill();
ctx.fillStyle = '#f5a'; ctx.beginPath(); ctx.arc(x2,y2,6,0,Math.PI*2); ctx.fill();


// grid / target crosshair
ctx.fillStyle='rgba(255,255,255,0.04)';
for(let gx=0;gx<canvas.width;gx+=40){ctx.fillRect(gx,0,1,canvas.height)}
for(let gy=0;gy<canvas.height;gy+=40){ctx.fillRect(0,gy,canvas.width,1)}


coords.textContent = `(${(x2-cx).toFixed(1)}, ${(- (y2-cy)).toFixed(1)})`;
a1val.textContent = a1.value;
a2val.textContent = a2.value;
}
[a1,a2,l1,l2].forEach(el=>el.addEventListener('input', draw));
randomBtn.addEventListener('click', ()=>{
a1.value = (Math.random()*360-180).toFixed(0);
a2.value = (Math.random()*180-90).toFixed(0);
draw();
});
resetBtn.addEventListener('click', ()=>{a1.value=45;a2.value=30;l1.value=120;l2.value=100;draw()});


// initial draw
draw();
// --- Simple quiz behavior ---
const quiz = [
{q:'Which quantity does forward kinematics compute?', choices:['The torques needed at joints','The position of the end-effector','The sensor calibration values','The battery state-of-charge'], a:1},
{q:'What does a servo motor provide?', choices:['Precise position control','Bake cycles for motors','Wireless communication','Power conversion'], a:0},
{q:'Inverse kinematics is used to compute...', choices:['Motor PWM signals','Joint angles for a desired end position','Battery voltage','Sensor noise'], a:1}
];
let qi = 0;
const qtext = document.getElementById('qtext');
const answers = document.querySelectorAll('.ans');
const feedback = document.getElementById('feedback');
const nextQ = document.getElementById('nextQ');


function loadQuestion(i){
const Q = quiz[i]; qtext.textContent = Q.q;
answers.forEach((b,idx)=>{b.textContent=Q.choices[idx]; b.disabled=false; b.style.opacity='1';});
feedback.textContent='';
}
answers.forEach((b,idx)=>b.addEventListener('click',()=>{
const correct = quiz[qi].a === idx;
feedback.textContent = correct ? '✅ Correct!' : '❌ Not quite — try the next one.';
answers.forEach(btn=>btn.disabled=true);
answers[quiz[qi].a].style.outline = '3px solid rgba(155,92,255,0.2)';
}));
nextQ.addEventListener('click',()=>{answers.forEach(btn=>btn.style.outline='none'); qi=(qi+1)%quiz.length; loadQuestion(qi)});
loadQuestion(qi);


})();
