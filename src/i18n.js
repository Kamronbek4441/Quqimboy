import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    debug: false,
    resources: {
      uz: {
        translation: {
          home: "Bosh sahifa",
          products: "Mahsulotlar",
          about: "Biz haqimizda",
          partners: "Hamkorlarimiz",
          order: "Buyurtma",
          contact: "Aloqa",
          about1: `“Ququmboy Naslchilik Parranda” MChJ — 1981 yilda tashkil topgan bo‘lib, parrandachilik sohasida 40 yildan ortiq tajribaga ega yetakchi kompaniyalardan biridir. Parrandachilik sohasida jadal rivojlanayotgan korxonamiz — "ROSS 308" yuqori mahsuldor naslini yetishtirish bo‘yicha yetakchilardan biridir. Bizning maqsadimiz — sifatli mahsulot va barqaror rivojlanish orqali bozor ehtiyojini to‘liq qondirish.`,
          about2: `Bizning faoliyatimiz Namangan viloyati, Kosonsoy tumani, Ququmboy qishlog‘ida joylashgan bo‘lib, hozirgi kunda 245 gektar umumiy hududda faoliyat yuritamiz. Shundan 35 gektar yer asosiy ishlab chiqarish maydoniga ajratilgan. Bizda 40,000 bosh naslli ona tovuq boqiladi va har yili 800,000 bosh jo‘ja yetishtiriladi.`,
          rossTitle: "ROSS-308 naslning asosiy xususiyatlari:",
          rossList: [
            "✔ So'yish uchun mukammal shakl.",
            "✔ Kuchli tana vazni.",
            "✔ Barqaror va yuqori mahsuldorlik.",
            "✔ Yengil teri va jozibali tana go'shti ko'rinishi.",
            "✔ Naslni ko'paytirish qobiliyati, normal immunitet.",
          ],
          contactTitle: "Biz bilan bog'laning",
          address: "Manzil",
          addressLine1: "Namangan viloyati,",
          addressLine2: "Kosonsoy tumani",
          addressLine3: "Ququmboy qishlog'i Buston M.F.Y",
          phone: "Telefon",
          feedbackTitle: "Fikr-mulohaza yuboring",
          yourName: "Ismingiz",
          yourEmail: "Email manzilingiz",
          yourMessage: "Xabaringiz",
          sendBtn: "Yuborish",
          newMessage: "Yangi xabar",
          name: "Ism",
          message: "Xabar",
          sentSuccess: "Xabaringiz yuborildi!",
          sentError: "Xabar yuborilmadi!",
          imgAlt1: "Jo‘ja ochilmoqda",
          imgAlt2: "Ko‘plab jo‘jalar",
          imgAlt3: "Tovuq go‘shti",
          imgAlt4: "Ozuqa qoplari",
          whyUsTitle: "Nega aynan biz?",
          whyUs1: "Zamonaviy texnologiyalar asosida ishlab chiqarish.",
          whyUs2: "Yevropa standartlariga mos sifat nazorati.",
          whyUs3: "Har bir mahsulot — tabiiy va xavfsiz.",
          whyUs4: "ENG ASOSIYSI HALOL MAHSULOTLAR.",
          whyUs5:
            '"Ququmboy Naslchilik Parranda" MCHJ — Sizning sifatli parranda mahsulotlari bo‘yicha ishonchli hamkoringiz!',
          partnersTitle: "Hamkorlar",
          partnersSubtitle: "Biz bilan hamkorlik qilayotgan kompaniyalar",
          orderTitle: "Buyurtma berish",
          namePlaceholder: "Ismingiz",
          phonePlaceholder: "Telefon raqamingiz",
          selectProduct: "Mahsulotni tanlang",
          commentPlaceholder: "Qo'shimcha izoh",
          submitButton: "Buyurtma berish",
          toastMessage:
            "✅ Buyurtmangiz qabul qilindi! Tez orada siz bilan bog‘lanamiz.",
          newOrder: "Yangi Buyurtma",
          date: "Sana",
          time: "Vaqt",
          name: "Ism",
          phone: "Telefon",
          product: "Mahsulot",
          comment: "Izoh",
          p1: "Sifatli naslli tuxumlar",
          p2: "Bir kunlik naslli jo'jalar",
          p3: "Gril go'shti",
          p4: "Katta broyler go'shti",
          p5: "START ratsion ozuqa yem",
          p6: "ROST ratsion ozuqa yem",
          p7: "FINISH ratsion ozuqa yem",
          more: "Batafsil",
          hero: {
            aboutText:
              "“Ququmboy Naslchilik Parranda” mas’uliyati cheklangan jamiyati parrandachilik sohasida jadal rivojlanayotgan, zamonaviy texnologiyalar asosida faoliyat yurituvchi yetakchi korxonalardan biridir. Korxonada ROSS-308 nasllik tuxumlari va bir kunlik jo‘jalari, gril uchun go'sht, yangi va muzlatilgan katta broyler go‘shti hamda parrandachilik uchun sifatli ozuqa aralashmalari ishlab chiqariladi. Har bir mahsulotimiz — sog‘lom, toza va sifat kafolati ostida!",
            chickText1:
              "Tovuq yetishtirishning zamonaviy texnologiyalari doimiy ravishda rivojlanmoqda. Ular jahon bozorini sifatli, nisbatan arzon va sog‘lom mahsulotlar bilan to‘ldirishga mo‘ljallangan.",
            chickText2:
              "Bunda parranda go‘shtining mahsuldorligi bir kilogramm go‘sht yetishtirish uchun iste’mol qilinadigan ozuqa nisbati sifatida aniqlanadi. Shu nuqtai nazardan, broyler tovuqlari go'sht yo'nalishida birinchi o'rinni mustahkam ushlab turadi.",
            prod1Title: "Inkubatsiya tuxumi «ROSS-308»",
            prod1Text:
              '"Ququmboy Naslchilik Parranda" MCHJ "ROSS-308" nasllik va yuqori sifatli broyler inkubatsiya tuxumlarini yetkazib berishdan mamnun.',
            prod2Title: "Kunlik broyler jo'jalar «ROSS-308»",
            prod2Text:
              "Biz omon qolish qobiliyati va ozuqa konvertatsiyasi yuqori bo'lgan bir kunlik broyler jo'jalarini sotamiz.",
            prod3Title: "Yangi va muzlatilgan go'shtli broyler",
            prod3Text:
              "Yangi va muzlatilgan broyler go‘shti yuqori “A” toifali sifatga ega bo‘lib, 100 foiz mahalliy mahsulot hisoblanadi.",
            prod4Title: "Parrandalar uchun aralash ozuqa",
            prod4Text:
              "Yuqori sifatli, ekologik toza yem. “Ququmboy Naslchilik Parranda” MCHJ tomonidan ishlab chiqarilgan granullangan yemlar jo'jalarni tez o'sishi, parrandalarning yuqori sifatda oziqlanishini ta'minlaydi.",
          },
        },
      },
      ru: {
        translation: {
          about1: `ООО «Кукумбой Наслчилик Парранда» — основано в 1981 году и является одной из ведущих компаний в птицеводстве с более чем 40-летним опытом. Наша быстроразвивающаяся компания является одним из лидеров по выращиванию высокопродуктивной породы "ROSS 308". Наша цель — полностью удовлетворить потребности рынка за счет качественной продукции и устойчивого развития.`,
          about2: `Наша деятельность расположена в Наманганской области, Косонсайском районе, в деревне Кукумбой. Сегодня мы работаем на общей площади 245 гектаров, из которых 35 гектаров выделено под основное производство. У нас содержится 40 000 голов родительских кур и ежегодно выращивается 800 000 цыплят.`,
          rossTitle: "Основные характеристики породы ROSS-308:",
          rossList: [
            "✔ Отличная форма для забоя.",
            "✔ Крупная масса тела.",
            "✔ Стабильная и высокая продуктивность.",
            "✔ Светлая кожа и привлекательный вид тушки.",
            "✔ Хорошая воспроизводимость и нормальный иммунитет.",
          ],
          home: "Главная",
          products: "Продукция",
          about: "О нас",
          partners: "Партнёры",
          order: "Заказ",
          contact: "Контакты",
          contactTitle: "Свяжитесь с нами",
          address: "Адрес",
          addressLine1: "Наманганская область,",
          addressLine2: "Косонсойский район",
          addressLine3: "Село Кукумбой, Бустон М.Ф.Й",
          phone: "Телефон",
          feedbackTitle: "Отправьте отзыв",
          yourName: "Ваше имя",
          yourEmail: "Ваш Email",
          yourMessage: "Ваше сообщение",
          sendBtn: "Отправить",
          newMessage: "Новое сообщение",
          name: "Имя",
          message: "Сообщение",
          sentSuccess: "Ваше сообщение отправлено!",
          sentError: "Сообщение не отправлено!",
          imgAlt1: "Вывод цыпленка",
          imgAlt2: "Много цыплят",
          imgAlt3: "Куриное мясо",
          imgAlt4: "Мешки с кормом",
          whyUsTitle: "Почему именно мы?",
          whyUs1: "Производство на основе современных технологий.",
          whyUs2: "Контроль качества по европейским стандартам.",
          whyUs3: "Каждый продукт — натуральный и безопасный.",
          whyUs4: "САМОЕ ГЛАВНОЕ — ХАЛЯЛЬНАЯ ПРОДУКЦИЯ.",
          whyUs5:
            '"Кукумбой Наслчилик Парранда" ООО — Ваш надежный партнер по качественной продукции из птицы!',
          partnersTitle: "Партнёры",
          partnersSubtitle: "Компании, которые сотрудничают с нами",
          orderTitle: "Сделать заказ",
          namePlaceholder: "Ваше имя",
          phonePlaceholder: "Ваш номер телефона",
          selectProduct: "Выберите продукт",
          commentPlaceholder: "Дополнительный комментарий",
          submitButton: "Отправить заказ",
          toastMessage:
            "✅ Ваш заказ принят! Мы свяжемся с вами в ближайшее время.",
          newOrder: "Новый заказ",
          date: "Дата",
          time: "Время",
          name: "Имя",
          phone: "Телефон",
          product: "Продукт",
          comment: "Комментарий",
          p1: "Качественные инкубационные яйца",
          p2: "Суточные цыплята",
          p3: "Курица гриль",
          p4: "Мясо крупного бройлера",
          p5: "Корм START",
          p6: "Корм ROST",
          p7: "Корм FINISH",
          more: "Подробнее",
          hero: {
            aboutText:
              "ООО «Кукумбой Насльчик Парранда» — одно из ведущих, быстро развивающихся предприятий в сфере птицеводства, работающих на основе современных технологий. На предприятии производятся инкубационные яйца породы ROSS-308, суточные цыплята, мясо гриль, свежее и замороженное мясо крупных бройлеров, а также качественные комбикорма для птицеводства. Каждый наш продукт — это здоровье, чистота и гарантия качества!",
            chickText1:
              "Современные технологии выращивания кур постоянно развиваются. Они предназначены для обеспечения мирового рынка качественными, относительно недорогими и полезными продуктами.",
            chickText2:
              "Производительность мяса птицы определяется как соотношение корма, потребляемого для производства одного килограмма мяса. С этой точки зрения бройлерные куры прочно удерживают первое место в мясном направлении.",
            prod1Title: "Инкубационное яйцо «ROSS-308»",
            prod1Text:
              "ООО «Кукумбой Насльчик Парранда» с радостью поставляет инкубационные яйца породы «ROSS-308» высокого качества.",
            prod2Title: "Суточные цыплята-бройлеры «ROSS-308»",
            prod2Text:
              "Мы продаем суточных бройлерных цыплят с высокой выживаемостью и отличной конверсией корма.",
            prod3Title: "Свежее и замороженное мясо бройлеров",
            prod3Text:
              "Свежее и замороженное мясо бройлеров соответствует высокому стандарту качества категории «A» и является 100% отечественным продуктом.",
            prod4Title: "Комбикорм для птиц",
            prod4Text:
              "Высококачественный, экологически чистый корм. Гранулированные корма, произведенные ООО «Кукумбой Насльчик Парранда», обеспечивают быстрый рост цыплят и качественное питание птицы.",
          },
        },
      },
      en: {
        translation: {
          about1: `"Ququmboy Naslchilik Parranda" LLC — founded in 1981, is one of the leading companies in poultry farming with over 40 years of experience. Our rapidly developing company is one of the leaders in breeding the highly productive "ROSS 308" line. Our goal is to fully meet market needs through high-quality products and sustainable development.`,
          about2: `Our operations are located in Namangan region, Kosonsoy district, Ququmboy village, currently covering 245 hectares in total. Of this, 35 hectares are allocated for main production. We keep 40,000 parent hens and produce 800,000 chicks annually.`,
          rossTitle: "Main characteristics of the ROSS-308 breed:",
          rossList: [
            "✔ Excellent slaughter shape.",
            "✔ Strong body weight.",
            "✔ Stable and high productivity.",
            "✔ Light skin and attractive meat appearance.",
            "✔ Good breeding ability and normal immunity.",
          ],
          home: "Home",
          products: "Products",
          about: "About us",
          partners: "Partners",
          order: "Order",
          contact: "Contact",
          contactTitle: "Contact Us",
          address: "Address",
          addressLine1: "Namangan region,",
          addressLine2: "Kosonsoy district",
          addressLine3: "Ququmboy village, Buston M.F.Y",
          phone: "Phone",
          feedbackTitle: "Send Feedback",
          yourName: "Your Name",
          yourEmail: "Your Email",
          yourMessage: "Your Message",
          sendBtn: "Send",
          newMessage: "New message",
          name: "Name",
          message: "Message",
          sentSuccess: "Your message has been sent!",
          sentError: "Message not sent!",
          imgAlt1: "Chick hatching",
          imgAlt2: "Many chicks",
          imgAlt3: "Chicken meat",
          imgAlt4: "Feed bags",
          whyUsTitle: "Why choose us?",
          whyUs1: "Production based on modern technologies.",
          whyUs2: "Quality control according to European standards.",
          whyUs3: "Every product is natural and safe.",
          whyUs4: "MOST IMPORTANTLY — HALAL PRODUCTS.",
          whyUs5:
            '"Ququmboy Naslchilik Parranda" LLC — Your reliable partner for quality poultry products!',
          partnersTitle: "Partners",
          partnersSubtitle: "Companies cooperating with us",
          orderTitle: "Place an Order",
          namePlaceholder: "Your Name",
          phonePlaceholder: "Your Phone Number",
          selectProduct: "Select a Product",
          commentPlaceholder: "Additional Comment",
          submitButton: "Submit Order",
          toastMessage:
            "✅ Your order has been received! We will contact you soon.",
          newOrder: "New Order",
          date: "Date",
          time: "Time",
          name: "Name",
          phone: "Phone",
          product: "Product",
          comment: "Comment",
          p1: "High-quality hatching eggs",
          p2: "Day-old chicks",
          p3: "Grilled chicken",
          p4: "Large broiler meat",
          p5: "START feed ration",
          p6: "ROST feed ration",
          p7: "FINISH feed ration",
          more: "Read more",
          hero: {
            aboutText:
              "Ququmboy Naslchilik Parranda LLC is one of the leading and rapidly developing companies in the poultry industry, operating based on modern technologies. The company produces ROSS-308 hatching eggs, day-old chicks, grill meat, fresh and frozen large broiler meat, as well as high-quality poultry feed mixtures. Each of our products is healthy, clean, and guaranteed in quality!",
            chickText1:
              "Modern chicken farming technologies are constantly evolving. They are designed to supply the global market with high-quality, relatively inexpensive, and healthy products.",
            chickText2:
              "The productivity of poultry meat is determined by the feed conversion ratio per kilogram of meat produced. From this perspective, broiler chickens firmly hold the first place in meat production.",
            prod1Title: "Incubation eggs «ROSS-308»",
            prod1Text:
              "Ququmboy Naslchilik Parranda LLC is pleased to supply high-quality ROSS-308 broiler incubation eggs.",
            prod2Title: "Day-old broiler chicks «ROSS-308»",
            prod2Text:
              "We sell day-old broiler chicks with high survival rates and excellent feed conversion.",
            prod3Title: "Fresh and frozen broiler meat",
            prod3Text:
              "Fresh and frozen broiler meat meets the high 'A' quality standard and is 100% locally produced.",
            prod4Title: "Poultry feed mix",
            prod4Text:
              "High-quality, eco-friendly feed. The granulated feed produced by Ququmboy Naslchilik Parranda LLC ensures rapid chick growth and quality poultry nutrition.",
          },
        },
      },
    },
  });

export default i18n;

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: "uz",
//     debug: true,
//     resources: {
//       uz: {
//         translation: {
//           welcome: "Xush kelibsiz",
//           order: "Buyurtma berish",
//           salom: "Salom"
//         }
//       },
//       ru: {
//         translation: {
//           welcome: "Добро пожаловать",
//           order: "Сделать заказ",
//           salom: "Привет"
//         }
//       },
//       en: {
//         translation: {
//           welcome: "Welcome",
//           order: "Order now",
//           salom: "Hello"
//         }
//       }
//     }
//   });

// export default i18n;
