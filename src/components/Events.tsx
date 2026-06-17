import { Card } from "@/components/ui/card";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "AITU DEV 26 - جامعة أسيوط",
      description:
        "الطاقة اللي شفناها النهاردة في جامعة أسيوط طمنتنا على المستقبل!😍\n\nيوم ميتوصفش في AITU DEV 26.. كنا سعداء جداً بصفتنا Sponsor للحدث، والأكتر سعادة بالمناقشات والأفكار اللي سمعناها من الطلاب والحضور.\n\nفي \"نشأ\"، إحنا مش بس بنعلم أطفال.. إحنا بنبني الكوادر اللي هتدخل الجامعات دي كمان كام سنة وهي جاهزة تقود وتغير العالم. 🌍💡",
      images: ["/events/1/1.jpg", "/events/1/2.jpg", "/events/1/3.jpg"],
      type: "event",
      date: "2024",
    },
    {
      id: 2,
      title: "🌟 روزي محمد إسماعيل - Best Student",
      description:
        "رائدة أعمال المستقبل وصلت! 🚀✨\n\nبكل فخر وسعادة، نحتفل اليوم ببطلتنا المتميزة \"روزي محمد إسماعيل\" 🌟 لحصولها على لقب Best Student في (Round 1) من كورس ريادة الأعمال. 🥇\n\nروزي أثبتت إن الإبداع والقيادة مالهمش سن، وإن الحلم بيبدأ بخطوة صغيرة وإصرار كبير. برافو يا روزي، دي مجرد بداية لرحلة نجاح كبيرة! 💪🌱",
      images: ["/events/2/2-1.jpg"],
      type: "student",
      courseType: "ريادة الأعمال",
      date: "2024",
    },
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-4">
            قصص النجاح والأحداث 🎉
          </h2>
          <p className="text-xl text-gray-600">
            اطلع على أحدث أحداثنا وقصص نجاح طلابنا المتميزين
          </p>
        </div>

        <div className="space-y-12">
          {events.map((event) => (
            <Card
              key={event.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Content */}
                <div className="flex flex-col justify-center" dir="rtl">
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    {event.title}
                  </h3>

                  {event.type === "student" && (
                    <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-800 px-4 py-2 rounded-full w-fit mb-4">
                      <span className="font-bold">🏆 {event.courseType}</span>
                    </div>
                  )}

                  <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg mb-6">
                    {event.description}
                  </p>

                  <div className="text-sm text-gray-500 mt-auto">
                    📅 {event.date}
                  </div>
                </div>

                {/* Images */}
                <div className="flex flex-col gap-4">
                  {event.images.map((image, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-72"
                    >
                      <img
                        src={image}
                        alt={`${event.title} - صورة ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">تريد ابنك/بنتك يكونوا نجوم قصتنا الجاية؟</h3>
          <p className="text-xl mb-8 opacity-90">
            انضم لآلاف الطلاب الذين يتعلمون معنا ويحققون أحلامهم في البرمجة والذكاء الاصطناعي وريادة الأعمال
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
            ابدأ الآن
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
