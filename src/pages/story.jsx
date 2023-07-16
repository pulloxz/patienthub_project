import React, { Component } from "react"; 
import { Helmet } from "react-helmet"; 
 
class StoryPage extends Component { 
  render() { 
    return ( 
      <div className="all"> 
        <Helmet> 
          <link 
            rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
          /> 
        </Helmet> 
        <br></br>
             <section> 
    <div class="icon"> 
      <div class="par"> 
        <h2 className="rr1">؟     PatientHub لماذا     </h2> 

      <p >  تعمل هذه المنصة بالتعاون بين الطلاب في جامعة طب الأسنان والمؤسسات التعليمية المشاركة       <i class="fas fa-star mr-2"></i></p> 
      <p>يتم تنظيم فرق من الطلاب المدربين جيدًا لتقديم العناية الفموية الأساسية والخدمات العلاجية المجانية للمرضى  <i class="fas fa-star mr-2"></i></p> 
      <p> .حيث يحصلون على فرصة قيمة لتطوير مهاراتهم  واكتساب الخبرة العملية اللازمة في مجال طب الأسنان  <i class="fas fa-star mr-2"></i></p> 
    </div> 
        </div> 
        
         
 
        <div class="icon"> 
          <div class="par2"> 
            <h2 className="rr1">خدماتنا </h2> 
          <p>تضمن الخدمات التي يقدمها الطلاب على هذه المنصة الفحص الشامل للفم والأسنان   <i class="fas fa-star mr-2"></i></p>  
           <p> عمليات التنظيف الأساسية وتلميع الأسنان  <i class="fas fa-star mr-2"></i></p> 
           <p>  تركيب حشوات الأسنان والأطقم المؤقتة  <i class="fas fa-star mr-2"></i></p> 
           <p> قلع الأسنان التالفة   <i class="fas fa-star mr-2"></i></p> 
           {/* <p>تركيب الأطقم المؤقتة   <i class="fas fa-star mr-2"></i></p>  */}
        </div> 
          </div> 
         
  
</section> 

        </div> 
 
        ); 
    } 
} 
  
export default StoryPage ;