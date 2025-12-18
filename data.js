// Content data for the website
const contentData = [
    // Car Driving
    {
        category: 'driving',
        icon: 'fas fa-car',
        videoUrl: 'videos/driving/seatbelt.mp4',
        videoType: 'local',
        title: {
            en: 'Car Driving in India',
            hi: 'भारत में कार चलाना'
        },
        dos: {
            en: [
                {text: 'Always wear seat belts for driver and all passengers', video: 'videos/driving/seatbelt.mp4'},
                {text: 'Follow traffic signals and road signs strictly', video: 'videos/driving/traffic-signals.mp4'},
                {text: 'Maintain safe distance from the vehicle ahead', video: 'videos/driving/safe-distance.mp4'},
                {text: 'Use indicators while changing lanes or turning', video: 'videos/driving/indicators.mp4'},
                {text: 'Keep valid driving license, registration, and insurance papers', video: null},
                {text: 'Drive within speed limits (usually 40-60 km/h in cities)', video: 'videos/driving/speed-limit.mp4'},
                {text: 'Check mirrors frequently and be aware of blind spots', video: 'videos/driving/mirrors.mp4'},
                {text: 'Honk only when necessary and avoid excessive honking', video: null},
                {text: 'Be extra cautious during monsoon season', video: 'videos/driving/monsoon.mp4'},
                {text: 'Keep emergency kit and first aid box in car', video: null}
            ],
            hi: [
                {text: 'चालक और सभी यात्रियों के लिए सीट बेल्ट अवश्य पहनें', video: 'videos/driving/seatbelt.mp4'},
                {text: 'यातायात संकेतों और सड़क संकेतों का सख्ती से पालन करें', video: 'videos/driving/traffic-signals.mp4'},
                {text: 'आगे वाली गाड़ी से सुरक्षित दूरी बनाए रखें', video: 'videos/driving/safe-distance.mp4'},
                {text: 'लेन बदलते या मुड़ते समय इंडिकेटर का उपयोग करें', video: 'videos/driving/indicators.mp4'},
                {text: 'वैध ड्राइविंग लाइसेंस, पंजीकरण और बीमा पत्र रखें', video: null},
                {text: 'गति सीमा के भीतर गाड़ी चलाएं (शहरों में आमतौर पर 40-60 किमी/घंटा)', video: 'videos/driving/speed-limit.mp4'},
                {text: 'शीशों की बार-बार जांच करें और ब्लाइंड स्पॉट के प्रति सावधान रहें', video: 'videos/driving/mirrors.mp4'},
                {text: 'केवल आवश्यक होने पर हॉर्न बजाएं और अधिक हॉर्न बजाने से बचें', video: null},
                {text: 'मानसून के मौसम में अतिरिक्त सावधानी बरतें', video: 'videos/driving/monsoon.mp4'},
                {text: 'कार में आपातकालीन किट और प्राथमिक चिकित्सा बॉक्स रखें', video: null}
            ]
        },
        donts: {
            en: [
                {text: 'Never drink and drive', video: 'videos/driving/no-drink-drive.mp4'},
                {text: 'Don\'t use mobile phone while driving', video: 'videos/driving/no-mobile.mp4'},
                {text: 'Don\'t overtake from the left side', video: 'videos/driving/no-left-overtake.mp4'},
                {text: 'Don\'t ignore pedestrians at zebra crossings', video: null},
                {text: 'Don\'t drive when feeling drowsy or tired', video: 'videos/driving/no-drowsy.mp4'},
                {text: 'Don\'t park in no-parking zones', video: null},
                {text: 'Don\'t drive without proper vehicle insurance', video: null},
                {text: 'Don\'t argue or fight with other drivers', video: 'videos/driving/no-road-rage.mp4'},
                {text: 'Don\'t block ambulances or emergency vehicles', video: null},
                {text: 'Don\'t drive with expired documents', video: null}
            ],
            hi: [
                {text: 'शराब पीकर कभी गाड़ी न चलाएं', video: 'videos/driving/no-drink-drive.mp4'},
                {text: 'गाड़ी चलाते समय मोबाइल फोन का उपयोग न करें', video: 'videos/driving/no-mobile.mp4'},
                {text: 'बाईं ओर से ओवरटेक न करें', video: 'videos/driving/no-left-overtake.mp4'},
                {text: 'ज़ेब्रा क्रॉसिंग पर पैदल यात्रियों की अनदेखी न करें', video: null},
                {text: 'थका या नींद महसूस होने पर गाड़ी न चलाएं', video: 'videos/driving/no-drowsy.mp4'},
                {text: 'नो-पार्किंग ज़ोन में पार्क न करें', video: null},
                {text: 'उचित वाहन बीमा के बिना गाड़ी न चलाएं', video: null},
                {text: 'अन्य ड्राइवरों के साथ बहस या लड़ाई न करें', video: 'videos/driving/no-road-rage.mp4'},
                {text: 'एम्बुलेंस या आपातकालीन वाहनों को रोकें नहीं', video: null},
                {text: 'समाप्त दस्तावेजों के साथ गाड़ी न चलाएं', video: null}
            ]
        }
    },

    // Walking
    {
        category: 'walking',
        icon: 'fas fa-walking',
        videoUrl: 'videos/walking/walking-safety.mp4',
        videoType: 'local',
        title: {
            en: 'Walking Safely',
            hi: 'सुरक्षित रूप से चलना'
        },
        dos: {
            en: [
                {text: 'Always use footpaths and pedestrian crossings', video: 'videos/walking/use-crossings.mp4'},
                {text: 'Look both ways before crossing the road', video: 'videos/walking/look-both-ways.mp4'},
                {text: 'Walk facing oncoming traffic if no footpath', video: null},
                {text: 'Wear visible clothing during early morning or night', video: null},
                {text: 'Stay alert and avoid distractions', video: 'videos/walking/stay-alert.mp4'},
                {text: 'Follow traffic signals at crossings', video: null},
                {text: 'Walk in well-lit areas during night', video: null},
                {text: 'Keep valuables secure and not openly visible', video: null},
                {text: 'Stay hydrated, especially during summer', video: null},
                {text: 'Wear comfortable and appropriate footwear', video: null}
            ],
            hi: [
                {text: 'हमेशा फुटपाथ और पैदल क्रॉसिंग का उपयोग करें', video: 'videos/walking/use-crossings.mp4'},
                {text: 'सड़क पार करने से पहले दोनों तरफ देखें', video: 'videos/walking/look-both-ways.mp4'},
                {text: 'यदि फुटपाथ नहीं है तो आने वाले ट्रैफिक की ओर मुंह करके चलें', video: null},
                {text: 'सुबह जल्दी या रात में दिखाई देने वाले कपड़े पहनें', video: null},
                {text: 'सतर्क रहें और ध्यान भटकाने से बचें', video: 'videos/walking/stay-alert.mp4'},
                {text: 'क्रॉसिंग पर यातायात संकेतों का पालन करें', video: null},
                {text: 'रात में अच्छी तरह से रोशनी वाले क्षेत्रों में चलें', video: null},
                {text: 'कीमती सामान सुरक्षित रखें और खुलेआम दिखाई न दें', video: null},
                {text: 'विशेष रूप से गर्मियों के दौरान हाइड्रेटेड रहें', video: null},
                {text: 'आरामदायक और उपयुक्त जूते पहनें', video: null}
            ]
        },
        donts: {
            en: [
                {text: 'Don\'t walk while using phone or earphones', video: 'videos/walking/no-phone.mp4'},
                {text: 'Don\'t jaywalk or cross roads at dangerous spots', video: 'videos/walking/no-jaywalk.mp4'},
                {text: 'Don\'t walk in the middle of the road', video: null},
                {text: 'Don\'t ignore traffic signals', video: null},
                {text: 'Don\'t walk alone in isolated areas late at night', video: null},
                {text: 'Don\'t wear flashy jewelry in crowded areas', video: null},
                {text: 'Don\'t accept food or drinks from strangers', video: null},
                {text: 'Don\'t litter on roads and public places', video: null},
                {text: 'Don\'t walk barefoot on roads', video: null},
                {text: 'Don\'t block footpaths or entrances', video: null}
            ],
            hi: [
                {text: 'फोन या इयरफोन का उपयोग करते हुए न चलें', video: 'videos/walking/no-phone.mp4'},
                {text: 'खतरनाक स्थानों पर सड़क पार न करें', video: 'videos/walking/no-jaywalk.mp4'},
                {text: 'सड़क के बीच में न चलें', video: null},
                {text: 'यातायात संकेतों की अनदेखी न करें', video: null},
                {text: 'देर रात अकेले सुनसान क्षेत्रों में न चलें', video: null},
                {text: 'भीड़-भाड़ वाले क्षेत्रों में चमकदार आभूषण न पहनें', video: null},
                {text: 'अजनबियों से खाना या पेय स्वीकार न करें', video: null},
                {text: 'सड़कों और सार्वजनिक स्थानों पर कूड़ा न फैलाएं', video: null},
                {text: 'सड़कों पर नंगे पैर न चलें', video: null},
                {text: 'फुटपाथ या प्रवेश द्वार को अवरुद्ध न करें', video: null}
            ]
        }
    },

    // Public Transport
    {
        category: 'public-transport',
        icon: 'fas fa-bus',
        videoUrl: 'videos/transport/public-transport.mp4',
        videoType: 'local',
        title: {
            en: 'Using Public Transport',
            hi: 'सार्वजनिक परिवहन का उपयोग'
        },
        dos: {
            en: [
                'Queue up properly while boarding',
                'Give seats to elderly, pregnant women, and disabled persons',
                'Keep your ticket or pass ready for inspection',
                'Hold onto railings during travel',
                'Keep your belongings close and secure',
                'Use official prepaid services for taxis and autos',
                'Note down vehicle number when traveling alone',
                'Get down only at designated stops',
                'Use seat belts in buses and taxis where available',
                'Respect other passengers and maintain decorum'
            ],
            hi: [
                'बोर्डिंग के दौरान ठीक से कतार में लगें',
                'बुजुर्गों, गर्भवती महिलाओं और विकलांग व्यक्तियों को सीट दें',
                'निरीक्षण के लिए अपना टिकट या पास तैयार रखें',
                'यात्रा के दौरान रेलिंग पकड़ें',
                'अपना सामान पास और सुरक्षित रखें',
                'टैक्सी और ऑटो के लिए आधिकारिक प्रीपेड सेवाओं का उपयोग करें',
                'अकेले यात्रा करते समय वाहन नंबर नोट करें',
                'केवल निर्धारित स्टॉप पर उतरें',
                'जहां उपलब्ध हो, बसों और टैक्सियों में सीट बेल्ट का उपयोग करें',
                'अन्य यात्रियों का सम्मान करें और शिष्टाचार बनाए रखें'
            ]
        },
        donts: {
            en: [
                'Don\'t board overcrowded vehicles',
                'Don\'t stick body parts out of windows',
                'Don\'t eat messy food in public transport',
                'Don\'t play loud music',
                'Don\'t argue with conductors or drivers',
                'Don\'t travel on footboards or rooftops',
                'Don\'t leave your belongings unattended',
                'Don\'t get into unmarked or suspicious vehicles',
                'Don\'t forget to check change given by conductor',
                'Don\'t block doors or emergency exits'
            ],
            hi: [
                'अत्यधिक भीड़ वाले वाहनों में न चढ़ें',
                'खिड़कियों से शरीर के अंग बाहर न निकालें',
                'सार्वजनिक परिवहन में गंदा खाना न खाएं',
                'तेज संगीत न बजाएं',
                'कंडक्टर या ड्राइवर के साथ बहस न करें',
                'फुटबोर्ड या छतों पर यात्रा न करें',
                'अपना सामान अकेला न छोड़ें',
                'चिन्हित या संदिग्ध वाहनों में न चढ़ें',
                'कंडक्टर द्वारा दिए गए बदलाव की जांच करना न भूलें',
                'दरवाजे या आपातकालीन निकास को अवरुद्ध न करें'
            ]
        }
    },

    // Health & Hygiene
    {
        category: 'health',
        icon: 'fas fa-heart',
        videoUrl: 'videos/placeholder.mp4',
        videoType: 'local',
        title: {
            en: 'Health & Hygiene',
            hi: 'स्वास्थ्य और स्वच्छता'
        },
        dos: {
            en: [
                'Wash hands frequently with soap and water',
                'Cover your mouth while coughing or sneezing',
                'Drink clean and boiled/filtered water',
                'Maintain personal hygiene daily',
                'Get regular health check-ups',
                'Exercise regularly and stay physically active',
                'Sleep for 7-8 hours daily',
                'Take prescribed medicines on time',
                'Keep your surroundings clean',
                'Use hand sanitizer when soap is not available'
            ],
            hi: [
                'साबुन और पानी से बार-बार हाथ धोएं',
                'खांसते या छींकते समय अपना मुंह ढकें',
                'साफ और उबला/फ़िल्टर किया हुआ पानी पिएं',
                'रोजाना व्यक्तिगत स्वच्छता बनाए रखें',
                'नियमित स्वास्थ्य जांच कराएं',
                'नियमित रूप से व्यायाम करें और शारीरिक रूप से सक्रिय रहें',
                'रोजाना 7-8 घंटे सोएं',
                'निर्धारित दवाएं समय पर लें',
                'अपने आसपास को साफ रखें',
                'जब साबुन उपलब्ध न हो तो हैंड सैनिटाइज़र का उपयोग करें'
            ]
        },
        donts: {
            en: [
                'Don\'t skip meals or eat junk food regularly',
                'Don\'t ignore symptoms of illness',
                'Don\'t self-medicate without consulting a doctor',
                'Don\'t share personal items like towels or razors',
                'Don\'t smoke or consume tobacco products',
                'Don\'t drink alcohol excessively',
                'Don\'t stay up late regularly',
                'Don\'t neglect mental health',
                'Don\'t eat stale or uncovered food',
                'Don\'t touch your face with unwashed hands'
            ],
            hi: [
                'भोजन न छोड़ें या नियमित रूप से जंक फूड न खाएं',
                'बीमारी के लक्षणों की अनदेखी न करें',
                'डॉक्टर से परामर्श किए बिना स्व-दवा न करें',
                'तौलिये या रेज़र जैसे व्यक्तिगत सामान साझा न करें',
                'धूम्रपान न करें या तंबाकू उत्पादों का सेवन न करें',
                'अत्यधिक शराब न पिएं',
                'नियमित रूप से देर तक न जागें',
                'मानसिक स्वास्थ्य की उपेक्षा न करें',
                'बासी या खुला खाना न खाएं',
                'बिना धोए हाथों से अपना चेहरा न छुएं'
            ]
        }
    },

    // Food Safety
    {
        category: 'food',
        icon: 'fas fa-utensils',
        videoUrl: 'videos/placeholder.mp4',
        videoType: 'local',
        title: {
            en: 'Food Safety',
            hi: 'खाद्य सुरक्षा'
        },
        dos: {
            en: [
                'Check expiry dates before buying packaged food',
                'Wash fruits and vegetables thoroughly',
                'Eat freshly cooked food',
                'Store food at appropriate temperatures',
                'Check FSSAI license at restaurants',
                'Drink water from reliable sources',
                'Cook meat and eggs thoroughly',
                'Keep raw and cooked food separate',
                'Use clean utensils and cookware',
                'Check food quality and cleanliness at eateries'
            ],
            hi: [
                'पैक किए गए भोजन को खरीदने से पहले समाप्ति तिथि जांचें',
                'फलों और सब्जियों को अच्छी तरह धोएं',
                'ताजा पका हुआ भोजन खाएं',
                'उचित तापमान पर भोजन स्टोर करें',
                'रेस्तरां में FSSAI लाइसेंस जांचें',
                'विश्वसनीय स्रोतों से पानी पिएं',
                'मांस और अंडे को अच्छी तरह पकाएं',
                'कच्चे और पके हुए भोजन को अलग रखें',
                'साफ बर्तन और खाना पकाने के बर्तन का उपयोग करें',
                'भोजनालयों में भोजन की गुणवत्ता और स्वच्छता की जांच करें'
            ]
        },
        donts: {
            en: [
                'Don\'t eat street food from unhygienic places',
                'Don\'t consume expired food products',
                'Don\'t leave cooked food outside for too long',
                'Don\'t eat raw or undercooked meat',
                'Don\'t buy food from vendors with poor hygiene',
                'Don\'t ignore food poisoning symptoms',
                'Don\'t reheat food multiple times',
                'Don\'t eat food that smells or looks bad',
                'Don\'t drink water from unknown sources',
                'Don\'t consume unpasteurized dairy products'
            ],
            hi: [
                'गंदी जगहों से स्ट्रीट फूड न खाएं',
                'समाप्त हो चुके खाद्य उत्पादों का सेवन न करें',
                'पका हुआ भोजन बहुत देर तक बाहर न छोड़ें',
                'कच्चा या अधपका मांस न खाएं',
                'खराब स्वच्छता वाले विक्रेताओं से भोजन न खरीदें',
                'खाद्य विषाक्तता के लक्षणों की अनदेखी न करें',
                'भोजन को कई बार गर्म न करें',
                'ऐसा भोजन न खाएं जो खराब दिखे या सूंघे',
                'अज्ञात स्रोतों से पानी न पिएं',
                'बिना पास्चुरीकृत डेयरी उत्पादों का सेवन न करें'
            ]
        }
    },

    // Personal Safety
    {
        category: 'safety',
        icon: 'fas fa-shield-alt',
        videoUrl: 'videos/placeholder.mp4',
        videoType: 'local',
        title: {
            en: 'Personal Safety',
            hi: 'व्यक्तिगत सुरक्षा'
        },
        dos: {
            en: [
                'Keep emergency numbers saved in your phone',
                'Share your location with family when traveling',
                'Trust your instincts if something feels wrong',
                'Keep photocopies of important documents',
                'Use well-lit and crowded routes',
                'Learn basic self-defense techniques',
                'Keep a charged phone with you always',
                'Be aware of your surroundings',
                'Keep local police station numbers handy',
                'Use verified and licensed services'
            ],
            hi: [
                'अपने फोन में आपातकालीन नंबर सहेजें',
                'यात्रा करते समय परिवार के साथ अपना स्थान साझा करें',
                'अगर कुछ गलत लगे तो अपनी प्रवृत्ति पर भरोसा करें',
                'महत्वपूर्ण दस्तावेजों की फोटोकॉपी रखें',
                'अच्छी तरह से रोशनी वाले और भीड़-भाड़ वाले रास्ते का उपयोग करें',
                'बुनियादी आत्मरक्षा तकनीक सीखें',
                'हमेशा चार्ज किया हुआ फोन अपने पास रखें',
                'अपने आसपास के बारे में जागरूक रहें',
                'स्थानीय पुलिस स्टेशन के नंबर संभाल कर रखें',
                'सत्यापित और लाइसेंस प्राप्त सेवाओं का उपयोग करें'
            ]
        },
        donts: {
            en: [
                'Don\'t share personal information with strangers',
                'Don\'t accept rides from unknown people',
                'Don\'t walk alone in dark and isolated areas',
                'Don\'t flash expensive items in public',
                'Don\'t leave drinks unattended in public places',
                'Don\'t ignore safety warnings',
                'Don\'t get into arguments with strangers',
                'Don\'t share your live location publicly on social media',
                'Don\'t keep all money and cards in one place',
                'Don\'t ignore suspicious behavior around you'
            ],
            hi: [
                'अजनबियों के साथ व्यक्तिगत जानकारी साझा न करें',
                'अज्ञात लोगों से लिफ्ट स्वीकार न करें',
                'अंधेरे और सुनसान क्षेत्रों में अकेले न चलें',
                'सार्वजनिक रूप से महंगी वस्तुओं का प्रदर्शन न करें',
                'सार्वजनिक स्थानों पर पेय को अकेला न छोड़ें',
                'सुरक्षा चेतावनियों की अनदेखी न करें',
                'अजनबियों के साथ बहस में न पड़ें',
                'सोशल मीडिया पर अपना लाइव स्थान सार्वजनिक रूप से साझा न करें',
                'सभी पैसे और कार्ड एक ही जगह न रखें',
                'अपने आसपास संदिग्ध व्यवहार की अनदेखी न करें'
            ]
        }
    },

    // Environment
    {
        category: 'environment',
        icon: 'fas fa-leaf',
        videoUrl: 'videos/placeholder.mp4',
        videoType: 'local',
        title: {
            en: 'Environmental Responsibility',
            hi: 'पर्यावरणीय जिम्मेदारी'
        },
        dos: {
            en: [
                'Segregate dry and wet waste properly',
                'Use cloth bags instead of plastic bags',
                'Save water by fixing leaks and using wisely',
                'Plant trees and maintain green spaces',
                'Use public transport or carpool when possible',
                'Switch off lights and fans when not in use',
                'Use energy-efficient appliances',
                'Recycle paper, plastic, and metal items',
                'Compost kitchen waste',
                'Participate in community cleanliness drives'
            ],
            hi: [
                'सूखे और गीले कचरे को ठीक से अलग करें',
                'प्लास्टिक बैग के बजाय कपड़े के बैग का उपयोग करें',
                'रिसाव को ठीक करके और समझदारी से उपयोग करके पानी बचाएं',
                'पेड़ लगाएं और हरित स्थानों का रखरखाव करें',
                'जब संभव हो सार्वजनिक परिवहन या कारपूल का उपयोग करें',
                'उपयोग में न होने पर लाइट और पंखे बंद करें',
                'ऊर्जा-कुशल उपकरणों का उपयोग करें',
                'कागज, प्लास्टिक और धातु की वस्तुओं को रीसायकल करें',
                'रसोई के कचरे की खाद बनाएं',
                'सामुदायिक स्वच्छता अभियानों में भाग लें'
            ]
        },
        donts: {
            en: [
                'Don\'t litter on roads and public places',
                'Don\'t use single-use plastics',
                'Don\'t waste water unnecessarily',
                'Don\'t burn garbage or leaves',
                'Don\'t pollute water bodies',
                'Don\'t cut trees without permission',
                'Don\'t use excessive plastic packaging',
                'Don\'t throw electronic waste in regular bins',
                'Don\'t waste electricity',
                'Don\'t ignore environmental regulations'
            ],
            hi: [
                'सड़कों और सार्वजनिक स्थानों पर कूड़ा न फैलाएं',
                'एकल-उपयोग प्लास्टिक का उपयोग न करें',
                'अनावश्यक रूप से पानी बर्बाद न करें',
                'कचरा या पत्तियां न जलाएं',
                'जल निकायों को प्रदूषित न करें',
                'बिना अनुमति के पेड़ न काटें',
                'अत्यधिक प्लास्टिक पैकेजिंग का उपयोग न करें',
                'नियमित डिब्बे में इलेक्ट्रॉनिक कचरा न फेंकें',
                'बिजली बर्बाद न करें',
                'पर्यावरणीय नियमों की अनदेखी न करें'
            ]
        }
    },

    // Money & Banking
    {
        category: 'money',
        icon: 'fas fa-rupee-sign',
        videoUrl: 'videos/placeholder.mp4',
        videoType: 'local',
        title: {
            en: 'Money & Banking Safety',
            hi: 'धन और बैंकिंग सुरक्षा'
        },
        dos: {
            en: [
                'Keep your PIN and passwords confidential',
                'Check your bank statements regularly',
                'Use secure internet banking and apps',
                'Enable two-factor authentication',
                'Keep emergency cash at home',
                'Save and file important financial documents',
                'Report lost cards immediately to the bank',
                'Use ATMs in well-lit and secure locations',
                'Verify UPI transactions before confirming',
                'Keep digital and physical receipts'
            ],
            hi: [
                'अपना पिन और पासवर्ड गोपनीय रखें',
                'नियमित रूप से अपने बैंक स्टेटमेंट की जांच करें',
                'सुरक्षित इंटरनेट बैंकिंग और ऐप का उपयोग करें',
                'दो-कारक प्रमाणीकरण सक्षम करें',
                'घर पर आपातकालीन नकदी रखें',
                'महत्वपूर्ण वित्तीय दस्तावेजों को सहेजें और फाइल करें',
                'खोए हुए कार्ड की तुरंत बैंक को रिपोर्ट करें',
                'अच्छी तरह से रोशनी वाले और सुरक्षित स्थानों पर एटीएम का उपयोग करें',
                'पुष्टि करने से पहले UPI लेनदेन की पुष्टि करें',
                'डिजिटल और भौतिक रसीदें रखें'
            ]
        },
        donts: {
            en: [
                'Don\'t share OTP with anyone, even bank officials',
                'Don\'t click on suspicious links in SMS or email',
                'Don\'t save card details on websites',
                'Don\'t write down PINs anywhere',
                'Don\'t fall for lottery or prize scams',
                'Don\'t give remote access to your devices',
                'Don\'t use public WiFi for banking transactions',
                'Don\'t share card CVV number',
                'Don\'t respond to calls asking for banking details',
                'Don\'t ignore unusual account activity'
            ],
            hi: [
                'किसी के साथ भी OTP साझा न करें, बैंक अधिकारियों के साथ भी नहीं',
                'SMS या ईमेल में संदिग्ध लिंक पर क्लिक न करें',
                'वेबसाइटों पर कार्ड विवरण सहेजें नहीं',
                'कहीं भी पिन न लिखें',
                'लॉटरी या पुरस्कार घोटालों में न फंसें',
                'अपने उपकरणों तक रिमोट एक्सेस न दें',
                'बैंकिंग लेनदेन के लिए सार्वजनिक WiFi का उपयोग न करें',
                'कार्ड CVV नंबर साझा न करें',
                'बैंकिंग विवरण मांगने वाली कॉल का जवाब न दें',
                'असामान्य खाता गतिविधि की अनदेखी न करें'
            ]
        }
    },

    // Two-Wheeler Riding
    {
        category: 'driving',
        icon: 'fas fa-motorcycle',
        videoUrl: 'videos/placeholder.mp4',
        videoType: 'local',
        title: {
            en: 'Two-Wheeler Riding',
            hi: 'दोपहिया वाहन चलाना'
        },
        dos: {
            en: [
                'Always wear ISI-marked helmet',
                'Ensure pillion rider also wears helmet',
                'Use headlights even during daytime',
                'Maintain proper tire pressure',
                'Service your vehicle regularly',
                'Use rear-view mirrors constantly',
                'Ride in the correct lane',
                'Slow down at intersections and turns',
                'Wear visible and protective riding gear',
                'Keep documents and insurance updated'
            ],
            hi: [
                'हमेशा ISI चिन्हित हेलमेट पहनें',
                'सुनिश्चित करें कि पिछली सीट पर बैठने वाला भी हेलमेट पहने',
                'दिन के समय भी हेडलाइट का उपयोग करें',
                'उचित टायर प्रेशर बनाए रखें',
                'अपने वाहन की नियमित सर्विस कराएं',
                'लगातार रियर-व्यू मिरर का उपयोग करें',
                'सही लेन में सवारी करें',
                'चौराहों और मोड़ों पर धीमा करें',
                'दिखाई देने वाले और सुरक्षात्मक राइडिंग गियर पहनें',
                'दस्तावेज और बीमा अपडेट रखें'
            ]
        },
        donts: {
            en: [
                'Don\'t perform stunts or wheelies on roads',
                'Don\'t ride without proper license',
                'Don\'t overload or carry excess passengers',
                'Don\'t ride under the influence of alcohol',
                'Don\'t use phone while riding',
                'Don\'t ignore traffic rules',
                'Don\'t ride on footpaths or wrong side',
                'Don\'t race with other vehicles',
                'Don\'t skip vehicle maintenance',
                'Don\'t ride with worn-out tires'
            ],
            hi: [
                'सड़कों पर स्टंट या व्हीली न करें',
                'उचित लाइसेंस के बिना सवारी न करें',
                'अधिक भार न लादें या अतिरिक्त यात्रियों को न ले जाएं',
                'शराब के प्रभाव में सवारी न करें',
                'सवारी करते समय फोन का उपयोग न करें',
                'यातायात नियमों की अनदेखी न करें',
                'फुटपाथ या गलत तरफ सवारी न करें',
                'अन्य वाहनों के साथ रेस न करें',
                'वाहन रखरखाव को न छोड़ें',
                'घिसे हुए टायरों के साथ सवारी न करें'
            ]
        }
    },

    // Online Safety
    {
        category: 'safety',
        icon: 'fas fa-laptop',
        videoUrl: 'videos/placeholder.mp4',
        videoType: 'local',
        title: {
            en: 'Online & Cyber Safety',
            hi: 'ऑनलाइन और साइबर सुरक्षा'
        },
        dos: {
            en: [
                'Use strong and unique passwords for accounts',
                'Enable privacy settings on social media',
                'Update software and apps regularly',
                'Verify website security before entering details',
                'Use licensed antivirus software',
                'Backup important data regularly',
                'Think before sharing personal information',
                'Report cyberbullying and harassment',
                'Use secure payment gateways for online shopping',
                'Educate family members about online safety'
            ],
            hi: [
                'खातों के लिए मजबूत और अद्वितीय पासवर्ड का उपयोग करें',
                'सोशल मीडिया पर गोपनीयता सेटिंग्स सक्षम करें',
                'नियमित रूप से सॉफ्टवेयर और ऐप अपडेट करें',
                'विवरण दर्ज करने से पहले वेबसाइट सुरक्षा सत्यापित करें',
                'लाइसेंस प्राप्त एंटीवायरस सॉफ्टवेयर का उपयोग करें',
                'नियमित रूप से महत्वपूर्ण डेटा का बैकअप लें',
                'व्यक्तिगत जानकारी साझा करने से पहले सोचें',
                'साइबर बदमाशी और उत्पीड़न की रिपोर्ट करें',
                'ऑनलाइन शॉपिंग के लिए सुरक्षित भुगतान गेटवे का उपयोग करें',
                'परिवार के सदस्यों को ऑनलाइन सुरक्षा के बारे में शिक्षित करें'
            ]
        },
        donts: {
            en: [
                'Don\'t use the same password everywhere',
                'Don\'t share personal photos with strangers online',
                'Don\'t click on pop-ups or unknown attachments',
                'Don\'t download from untrusted sources',
                'Don\'t accept friend requests from unknown people',
                'Don\'t share location with apps unnecessarily',
                'Don\'t ignore privacy policies',
                'Don\'t use public computers for sensitive work',
                'Don\'t fall for "get rich quick" schemes',
                'Don\'t believe everything you read online'
            ],
            hi: [
                'हर जगह एक ही पासवर्ड का उपयोग न करें',
                'ऑनलाइन अजनबियों के साथ व्यक्तिगत फोटो साझा न करें',
                'पॉप-अप या अज्ञात अटैचमेंट पर क्लिक न करें',
                'अविश्वसनीय स्रोतों से डाउनलोड न करें',
                'अज्ञात लोगों के फ्रेंड रिक्वेस्ट स्वीकार न करें',
                'ऐप्स के साथ अनावश्यक रूप से स्थान साझा न करें',
                'गोपनीयता नीतियों की अनदेखी न करें',
                'संवेदनशील काम के लिए सार्वजनिक कंप्यूटर का उपयोग न करें',
                '"जल्दी अमीर बनो" योजनाओं में न फंसें',
                'ऑनलाइन जो कुछ भी पढ़ें उस पर विश्वास न करें'
            ]
        }
    }
];
