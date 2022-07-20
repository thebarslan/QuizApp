import React, { useState } from 'react';
import logo from './ankarauni.png';
import autf from './autf.png';
import db from "./firebase";

export default function App() {
     const [firstName, setFirstName] = useState("");
     const [secondName, setSecondName] = useState("");
     const [scoreData, setScoreData] = useState("");
     const submit = (e) => {
       e.preventDefault();
       db.collection("customersData").add({
         firstname: firstName,
         lastname: secondName,
         score: scoreData,
       });
       startGame();
     
       setFirstName("");
       setSecondName("");
       setScoreData("");
     };
     const questions = [
          {
               questionText: 'Türkiye’nin de imzaladığı "Birleşmiş milletler çocuk haklarına dair sözleşme" ye göre 10 yaşındaki Mustafa’ya yapılanlardan hangisi çocuk haklarının bayram ziyaretinde ihlal edildiğinin göstergesi değildir?',
               answerOptions: [
                    { answerText: 'Bu çikolatayı veririm ama seni bir kere öpmeme izin ver.', isCorrect: false },
                    { answerText: 'Gel sana televizyonda çizgi film açayım ama seninle bir kez fotoğraf çekilmeme izin ver.', isCorrect: false },
                    { answerText: 'Sana telefonda her türlü müzik açacağım, istersen beraber de izleyebiliriz.', isCorrect: true },
                    { answerText: 'Bu bebeği sana hediye ederim ama sana sarılmama bir kere izin ver.', isCorrect: false },
               ],
               questionInfo : 'Çocukların sevdiği şeyleri kullanarak onları rızası olmayan şeylere zorlamak çocuk haklarına ihlaldir.',

          },
          {
               questionText: 'Türkiye’nin de imzaladığı "Birleşmiş milletler çocuk haklarına dair sözleşme" ye göre ayakkabı boyacısı olarak çalışan bireylerden hangisi bu tanımın dışında kalır?',
               answerOptions: [
                    { answerText: '10', isCorrect: false },
                    { answerText: '21', isCorrect: true },
                    { answerText: '3', isCorrect: false },
                    { answerText: '8', isCorrect: false },
               ],
               questionInfo : 'Birleşmiş milletler “Çocuk Haklarına Dair Sözleşme”si 1. Maddesine göre daha erken yaşta reşit olma durumu hariç, on sekiz yaşına kadar her insan çocuk sayılır; 32. Maddesine göre çocuğun, ekonomik sömürüye ve her türlü tehlikeli işte ya da eğitimine zarar verecek ya da sağlığı veya bedensel, zihinsel, ruhsal, ahlaksal ya da toplumsal gelişmesi için zararlı olabilecek nitelikte çalıştırılmasına karşı korunma hakkı korunmalıdır ve ihlal edilmesi suçtur. Ayrıca etik ve vicdani olarak kendi yaşıtlarının oyun oynayıp gezdiği yaşlarda en azından çocuk tanımına giren insanların çalıştırılması onlar için haksızlık olur.',
          },
          {
               questionText: 'Üniversite tercihi yapacak olan 17 yaşındaki Çağrı hangi durumda hak ihlali yaşamıştır?',
               answerOptions: [
                    { answerText: 'Sadece Şehir dışındaki üniversiteleri tercih listesine yazmasına rağmen ailesinin haber vermeden ÖSYM şifresiyle gizli şekilde kendi yaşadıkları şehirle değiştirmesi.', isCorrect: false },
                    { answerText: 'Çağrı’nın Bilgisayar mühendisliği okumak istediği için sadece bu bölümü tercih listesine yazmasına karşın ailesinin haber vermeden ÖSYM şifresiyle gizli şekilde tıp bölümünü yazması.', isCorrect: false },
                    { answerText: 'Çağrı’nın Bilgisayar mühendisliği okumak istediği için sadece bu bölümü tercih listesine yazmasına karşın ailesinin yoğun isteğiyle tıp bölümünü yazması', isCorrect: false },
                    { answerText: 'Hepsi', isCorrect: true },
               ],
               questionInfo : 'Birleşmiş milletler “Çocuk Haklarına Dair Sözleşme”si, 12. Madde 1. Fıkrasında Taraf Devletler, görüşlerini oluşturma yeteneğine sahip çocuğun, kendini ilgilendiren her konuda görüşlerini serbestçe ifade etme hakkını bu görüşlere çocuğun yaşı ve olgunluk derecesine uygun olarak, gereken özen gösterilmek suretiyle tanırlar. Ayrıca hayatının geri kalanını etkileyecek ve kararını verdiği anda olmasa bile kararına bağlı yaşantısının büyük bölümünü reşit geçireceği için 17 yaşındaki bireyin bu kararlarına saygı duyarak seçim yapmasına izin verilmelidir.',
          },
          {
               questionText: 'Yeni doğmuş henüz 10 günlük Mustafa’nın nüfus kaydı yapılırken aşağıdaki hangi durumları yaşaması çocuk hakkı ihlaline maruz kaldığını gösterir?',
               answerOptions: [
                    { answerText: 'Nüfusa kaydettiren babası doğduğu yeri kendi kütüğünün olduğu yer olarak değiştirtmesi.', isCorrect: false },
                    { answerText: 'Nüfusa en kısa zamanda kaydettirmek yerine gerekmediği süre boyunca erteleyerek geç kayıt yaptırması.', isCorrect: false },
                    { answerText: 'Nüfusa kayıt yapılırken daha uyumlu olması için doğum tarihinin birkaç gün geç yapılması.', isCorrect: false },
                    { answerText: 'Hepsi', isCorrect: true },
               ],
               questionInfo : 'Birleşmiş milletler “Çocuk Haklarına Dair Sözleşme”si 7. Madde 1. Fıkrasına göre  Çocuk doğumdan hemen sonra derhal nüfus kütüğüne kaydedilecek ve doğumdan itibaren bir isim hakkına, bir vatandaşlık kazanma hakkına ve mümkün olduğu ölçüde ana-babasını bilme ve onlar tarafından bakılma hakkına sahiptir. Ayrıca Mustafa’nın iyiliğini veya kendi hislerini tatmin etme duygusuyla gerçek olan bilgilerin değiştirilmesi hem hak ihlalidir hem suçtur.',
          },
          {
               questionText: 'Aşağıdakilerden hangisi çocuk hakları tanımından yararlanır?',
               answerOptions: [
                    { answerText: 'Doğu Anadolunun ücra köşesinde doğmuş fakat nüfusa kaydı yaptırılmamış 5 yaşlarındaki Emre', isCorrect: false },
                    { answerText: 'Suriye’den kaçarak Türkiye’ye sığınan 4 yaşındaki Hasan', isCorrect: false },
                    { answerText: 'Doğu Türkistan’daki zulümden ailesiyle kaçmaya çalışan Baran', isCorrect: false },
                    { answerText: 'Hepsi', isCorrect: true },
               ],
               questionInfo : 'İçlerinde bulundukları durum ne olursa olsun çocuk çocuktur ve sadece bu yüzden bu haklara sahip olmalıdır.',
          },
          {
               questionText: 'Aşağıdakilerden hangisi çocuk hak ihlallerinden bağımsızdır?',
               answerOptions: [
                    { answerText: '22 yaşındaki tıp fakültesi öğrencisinin ,ailesinin destek göstermeyeceğini söylediği için istemediği bölümü okumaya devam etmesi.', isCorrect: true },
                    { answerText: 'Lise müdürünün odasında kız öğrencilere cinsel istismarda bulunulması.', isCorrect: false },
                    { answerText: '6 yaşındaki bacağı topal kız çocuğunun zorla dilendirilmesi.', isCorrect: false },
                    { answerText: '7 yaşındaki çocuğun boyu kadar malzeme çantası taşıyarak ayakkabı boyacılığı yapması.', isCorrect: false },
               ],
               questionInfo : 'Birleşmiş milletler “Çocuk Haklarına Dair Sözleşme”si 1. Maddesine göre daha erken yaşta reşit olma durumu hariç, on sekiz yaşına kadar her insan çocuk sayılır .İlk şıkta bir hak ihlali olmasına rağmen çocuk tanımına girmediği için çocuk hakkı statüsüne girmez.',
          },
          {
               questionText: 'Türkiye’nin de imzaladığı "Birleşmiş milletler çocuk haklarına dair sözleşme" ye göre aşağıdakilerin hangisi kağıt toplayıcısı olarak çalışabilir?',
               answerOptions: [
                    { answerText: '17 yaşındaki Baran', isCorrect: false },
                    { answerText: '7 yaşındaki Şener', isCorrect: false },
                    { answerText: '6 yaşındaki Gökberk', isCorrect: false },
                    { answerText: 'Hiçbiri', isCorrect: true },
               ],
               questionInfo : 'Birleşmiş milletler “Çocuk Haklarına Dair Sözleşme”si 1. Maddesine göre daha erken yaşta reşit olma durumu hariç, on sekiz yaşına kadar her insan çocuk sayılır, 32. Maddesine göre çocuğun, ekonomik sömürüye ve her türlü tehlikeli işte ya da eğitimine zarar verecek ya da sağlığı veya bedensel, zihinsel, ruhsal, ahlaksal ya da toplumsal gelişmesi için zararlı olabilecek nitelikte çalıştırılmasına karşı korunma hakkı korunmalıdır ve ihlal edilmesi suçtur. Ayrıca etik ve vicdani olarak kendi yaşıtlarının oyun oynayıp gezdiği yaşlarda en azından çocuk tanımına giren insanların çalıştırılması onlar için haksızlık olur.',
          },
          {
               questionText: 'Aşağıdakilerin hangisinde çocuk hakkı ihlali yapılmıştır?',
               answerOptions: [
                    { answerText: 'Babası %50 engelli ve annesini kendi doğumunda kaybetmiş 14 yaşındaki Mustafa’nın evinde fatura ödenemediği için doğalgaz kesiktir. Elektrik sobasının gece uyurken devrilmesi sonucunda Mustafa’nın hayatını kaybetmesi.', isCorrect: false },
                    { answerText: 'Babasının ailesini terk ettiği ve annesi kanser hastası olan 17 yaşındaki Çağrı’nın geçimlerini sağlayabilmek için mobilya atölyesinde çalışırken asansörde sıkışarak hayatını kaybetmesi.', isCorrect: false },
                    { answerText: 'Annesi bebekken terk eden 10 yaşındaki Erdin’in, geçim sıkıntısı yaşadığı için babası gece çalışmaya çıktığında odun sobasından zehirlenerek hayatını kaybetmesi.', isCorrect: false },
                    { answerText: 'Hepsi', isCorrect: true },
               ],
               questionInfo : 'Birleşmiş milletler “Çocuk Haklarına Dair Sözleşme”si  27. Madde 3. Fıkrasına göre taraf Devletler, ulusal durumlarına göre ve olanakları ölçüsünde, anababaya ve çocuğun bakımını üstlenen diğer kişilere, çocuğun bu hakkının uygulanmasında yardımcı olmak amacıyla gerekli önlemleri alır ve gereksinim olduğu takdirde özellikle beslenme, giyim ve barınma konularında maddi yardım ve destek programları uygularlar. Ayrıca çocuklar temel gereksinimlerinin karşılanmasına ihtiyaç duymaktadır ve kötü standartlarda yaşamayı hak etmemektedirler.',
          },
          {
               questionText: 'Aşağıdakilerin hangisi 6 yaşındaki Doğukan’a çocuk hakkı ihlali değildir?',
               answerOptions: [
                    { answerText: 'Muayenesini yaptıktan sonra ailesi ve kendisinden izin alarak fotoğraf çeken çocuk doktoru.', isCorrect: true },
                    { answerText: 'Çikolata hediye etmeye karşılık bir kere öpmek isteyen bakkal Enver Amca.', isCorrect: false },
                    { answerText: 'Top hediye etmeye karşılık kendisini öpmesini isteyen kırtasiyeci Eylül Teyze.', isCorrect: false },
                    { answerText: 'Bilgisayar oyunu oynatmak için sarılmak isteyen komşu Melih Abi.', isCorrect: false },
               ],
               questionInfo : 'Çocukların sevdiği şeyleri kullanarak onları rızası olmayan şeylere zorlamak çocuk haklarına ihlaldir.',
          },
          {
               questionText: 'Aşağıdakilerin hangisinde çocuk hakkı ihlali yapılmamıştır?',
               answerOptions: [
                    { answerText: 'Kötü yaşam koşulları nedeniyle zatürreye yakalanarak yaşamını kaybeden 4 yaşındaki Asiye', isCorrect: false },
                    { answerText: 'Marangoz atölyesinde makineye kapılarak yaşamını kaybeden 15 yaşındaki Necmi', isCorrect: false },
                    { answerText: 'Çocuk hapishanesinde infaz ve koruma memurları tarafından işkence ve kötü muameleye maruz kalan, intihar girişiminde bulunan 17 yaşındaki Elif.', isCorrect: false },
                    { answerText: 'Hepsi', isCorrect: true },
               ],
               questionInfo : 'Birleşmiş milletler “Çocuk Haklarına Dair Sözleşme”si  37. Madde 1. Fıkrasına göre hiçbir çocuk, işkence veya diğer zalimce, insanlık dışı veya aşağılayıcı muamele ve cezaya tâbi tutulmayacaktır. Onsekiz yaşından küçük olanlara, işledikleri suçlar nedeniyle idam cezası verilemiyeceği gibi salıverilme koşulu bulunmayan ömür boyu hapis cezası da verilmeyecektir. Ayrıca gelişimini tam tamamlamamış çocuklar için şiddet yıkıcı sonuçlara sebep olabilir .Çocuklar temel gereksinimlerinin karşılanmasına ihtiyaç duymaktadır ve kötü standartlarda yaşamayı hak etmemektedirler. Etik ve vicdani olarak kendi yaşıtlarının gezip tozup eğlendiği yaşlarda en azından çocuk tanımına giren insanların çalıştırılması onlar için haksızlık olur.',
          },
     ];
     function GetCorrectQuestionNum(props){
          const found = props.find(x => x.isCorrect === true);
          const correctAnswer = found.answerText;
          return(correctAnswer);
     }
     // function ChangeInputs(){
     //      setFirstName(firstname);
     // }
     function QuestionInfo(props) {
          if(currentQuestion != 9){
               return (
                    <>
                         <div className="questionInfo">
                              <div className="questionCorrectAnswerText">
                                   CEVAP
                              </div>
                              <div className="questionCorrectAnswer">
                                   {GetCorrectQuestionNum(questions[currentQuestion].answerOptions)}
                              </div>
                              <div className="questionInfoText">
                                   {(questions[currentQuestion].questionInfo)}
                              </div>
                              <div className="nextQuestion">
                                   <button className='nextQstBtn' onClick={nextQuestion}>SIRADAKİ SORU</button>
                              </div>
                              
                         </div>
                    </>
               );
          }
          else{
               return(
                    <>
                         <div className="questionInfo">
                              <div className="questionCorrectAnswerText">
                                   CEVAP
                              </div>
                              <div className="questionCorrectAnswer">
                                   {GetCorrectQuestionNum(questions[currentQuestion].answerOptions)}
                              </div>
                              <div className="questionInfoText">
                                   {(questions[currentQuestion].questionInfo)}
                              </div>
                              <div className="nextQuestion">
                                   <button className='nextQstBtn' onClick={nextQuestion}>TESTİ BİTİR</button>
                              </div>
                              
                         </div>
                    </>
               )
          }
          
     }
     function TakingInputs(){
          setFirstPart(false);
          setInputs(true);
          return(
          <>
          <div className="input-part">
               <h5>Ad: </h5>
               <input type="text" placeholder='firstname'/>
          </div>
          <div className="input-part">
               <h5>Soyad: </h5>
               <input type="text" placeholder='lastname'/>
          </div>
          <div className="button-part">
               <button onClick={submit}>

               </button>
          </div>
          </>
          )
     }
     function Question(props) {
          return (<>
               <div className='question-section'>
                    <div className='question-count'>
                         <span>Soru {currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <div className='question-text'>{questions[currentQuestion].questionText}</div>
               </div>
               <div className='answer-section'>
                    {questions[currentQuestion].answerOptions.map((answerOption) => <button className='option' onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>)}
               </div>
          </>
          );
     }
     function DenemeHandler(props) {
          const isDeneme = props.isDeneme;
          if (isDeneme == true) {
               return (<QuestionInfo />);
          }else{
               return (<Question />);
          }
          

     }
     const [isFirstPart, setFirstPart] = useState(true);
     const [currentQuestion, setCurrentQuestion] = useState(0);
     const [showScore, setShowScore] = useState(false);
     const [score, setScore] = useState(0);
     const [info, setInfo] = useState(false);
     const [inputs, setInputs] = useState(false);
     const startGame = () => {
          setCurrentQuestion(0);
          setShowScore(false);
          setScore(0);
          setFirstPart(false);
     }
     const startFirstPart = () => {
          setCurrentQuestion(0);
          setShowScore(false);
          setScore(0);
          setFirstPart(true);
     }
     function nextQuestion(){
          setInfo(false);
          const nextQuestion = currentQuestion + 1;
          if (nextQuestion < questions.length) {
               setCurrentQuestion(nextQuestion);
          } else {
               setShowScore(true);
          }
     }
     const handleAnswerButtonClick = (isCorrect) => {
          if (isCorrect == true) {
               setScore(score + 1);
          }
          setInfo(true);
          
     }
     return (
          <div className='app'>
               <div className="logos">
               <img className='logo' src={logo}></img>
               <img className='logo' src={autf}></img>
               </div>
               {
                    isFirstPart ? (<>
                    <h2 className='cocuk-title'>ÇOCUK HAKLARI TESTİ</h2>
                    <div className="infos">
                    <h5>Bu test çocukların haklarını bilerek bunu gözetebilip koruyacak yetişkinler için ve geleceğin  yetişkinleri olacaklar için hazırlanmıştır. Haklarının -doğal olarak- bilincinde olmayan tüm çocuklarımızın haklarını korumayı görev edinmeliyiz.</h5>
                    <h5>Soruları ve açıklamalarını kendi vicdanım, bilgilerim ve "Çocuk Haklarına Dair Sözleşme"yi esas alarak hazırladım.</h5>
                    <h5>Soruları kendi vicdanınızı ön planda tutarak cevaplayınız.</h5>
                    </div>
                    
                    <button className='score-again' onClick={TakingInputs}>Başla</button>
                    </>) : 
                    (
                    <>
                    {inputs ? (<TakingInputs />) : (<>
                    {showScore ? (
                    <>
                    <div className="lastpart">
                         <a className='unicef-link' href="https://www.unicef.org/turkey/%C3%A7ocuk-haklar%C4%B1na-dair-s%C3%B6zle%C5%9Fme">Çocuk haklarına dair sözleşmeyle ilgili daha fazla bilgi sahibi olmak için tıklayın.</a>
                         <h5 className='mail'>Soru ve geribildirimleriniz için: <a href='mailto:mustafac.erdin@hotmail.com'>mustafac.erdin@hotmail.com</a></h5>
                         <button className='score-again2' onClick={startFirstPart}>Baştan başla</button>
                         <h5 className='name'>Mustafa Çağrı Erdin</h5>
                         <h5 className='uni'>Ankara Üniversitesi Tıp Fakültesi</h5>
                         </div>
                    </>
               ) : (
                    <>
                         <DenemeHandler isDeneme={info} />
                    </>
               )}</>)}
                    </>)
               }
               
          </div>
     );
}