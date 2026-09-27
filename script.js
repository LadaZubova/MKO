// ==================== ПЕРЕВОДЫ ====================

const translations = {
    ru: {
        'nav.actual': 'Актуальность',
        'nav.goal': 'Цель',
        'nav.methods': 'Методы',
        'nav.results': 'Результаты',
        'nav.transient': 'Расчёт',
        'nav.economy': 'Экономика',
        'nav.planets': 'Планеты',
        'nav.conclusions': 'Выводы',
        'nav.document': 'Работа',
        'nav.perspectives': 'Перспективы',
        'nav.refs': 'Литература',

        'hero.label': 'Исследовательский проект',
        'hero.title': 'Сравнительный анализ абляционной и фазопереходной термозащиты для многоразовых спускаемых аппаратов',
        'hero.authorLabel': 'Автор',
        'hero.author': 'Зубова Лада Вячеславовна',
        'hero.supervisorLabel': 'Научный руководитель',
        'hero.supervisor': 'Пименова Виолетта Владимировна',
        'hero.institutionLabel': 'Учреждение',
        'hero.institution': 'МБОУ Гимназия №2, г. Красногорск, 2026',

        'actual.title': 'Актуальность',
        'actual.p1': 'Абляционная защита, применяемая на большинстве современных спускаемых аппаратов, необратимо теряет материал при каждом спуске. После каждой миссии требуется полная замена теплозащитного экрана — это увеличивает стоимость и время межполётной подготовки.',
        'actual.p2': 'Фазопереходные материалы (ФПМ) способны сохранять массу при циклах «плавление–затвердевание», что делает их перспективными для создания многоразовых теплозащитных систем. Однако систематическое сравнение абляции и ФПМ при одинаковых тепловых нагрузках в открытой литературе представлено ограниченно.',
        'actual.p3': 'Настоящая работа восполняет этот пробел, предлагая методику сравнения для ранних этапов проектирования.',

        'goal.title': 'Цель и задачи',
        'goal.lead': 'Количественно сравнить абляционную и фазопереходную термозащиту по массе и толщине; обосновать гибридную схему для многоразовых спускаемых аппаратов.',
        'goal.task1': 'Рассчитать тепловую энергию, действующую на экран',
        'goal.task2': 'Определить массу и толщину слоя для ФПМ и аблятора',
        'goal.task3': 'Провести нестационарный тепловой расчёт',
        'goal.task4': 'Оценить экономическую эффективность гибридной схемы',
        'goal.task5': 'Рассмотреть применение для Марса и Титана',

        'methods.title': 'Методы расчёта',
        'methods.f1': 'Суммарная тепловая энергия',
        'methods.f2': 'Масса ФПМ-слоя',
        'methods.f3': 'Толщина ФПМ-слоя',
        'methods.f4': 'Масса аблятора',
        'methods.f5': 'Объёмная плотность энергии',
        'methods.scenario': 'Расчётный сценарий',
        'methods.scenarioDesc': 'Аналог «Союз», диаметр ~2 м. Тепловой поток 1,2 МВт/м², площадь 3,14 м², время нагрева 300 с.',
        'methods.energy': 'Поглощаемая энергия: Q = 1,13 ГДж',

        'results.title': 'Результаты стационарного расчёта',
        'results.param': 'Параметр',
        'results.paraffin': 'Парафин C24–C50',
        'results.salt': 'Na₂SO₄·10H₂O',
        'results.avcoat': 'Аблятор AVCOAT',
        'results.heat': 'Удельная теплота, кДж/кг',
        'results.density': 'Плотность, кг/м³',
        'results.ev': 'Объёмная плотность энергии, МДж/м³',
        'results.mass': 'Масса, кг',
        'results.thickness': 'Толщина',
        'results.m225': '2,25 м',
        'results.m095': '0,95 м',
        'results.mm129': '12,9 мм',
        'results.reusable': 'Многоразовость',
        'results.yes': 'Да',
        'results.cond': 'Условно',
        'results.no': 'Нет',

        'transient.title': 'Нестационарный тепловой расчёт',
        'transient.desc': 'Численное решение уравнения теплопроводности с фазовым переходом. Метод конечных разностей, Python.',
        'transient.param': 'Параметр',
        'transient.paraffin': 'Парафин',
        'transient.salt': 'Соль',
        'transient.depth': 'Глубина плавления',
        'transient.stat': 'Толщина по стац. расчёту',
        'transient.ratio': 'Отношение',
        'transient.r150': '150 раз',
        'transient.r54': '54 раза',
        'transient.temp': 'Температура поверхности',
        'transient.highlight': 'За 300 с расплавится только 0,5–2% от стационарной толщины',
        'transient.caption': 'Профиль температуры, глубина плавления и температура поверхности',

        'economy.title': 'Экономическая оценка',
        'economy.desc': 'Сравнение затрат за 10 полётов при консервативных допущениях.',
        'economy.item': 'Статья затрат',
        'economy.ablative': 'Чистый аблятор',
        'economy.hybrid': 'Гибридная схема',
        'economy.material': 'Материал аблятора',
        'economy.fpm': 'Материал ФПМ',
        'economy.service': 'Обслуживание (9 циклов)',
        'economy.saving': 'Экономия на выведении массы',
        'economy.total': 'Итого',
        'economy.highlight': 'Экономия: ~1,1 млрд руб. за 10 полётов. При 30 полётах — ~3,2 млрд руб.',

        'parachute.title': 'Влияние на парашютную систему',
        'parachute.desc': 'Диаметр купола пропорционален корню квадратному из массы аппарата.',
        'parachute.param': 'Параметр',
        'parachute.clean': 'Чистый СА',
        'parachute.hybrid': 'С ФПМ-подслоем',
        'parachute.change': 'Изменение',
        'parachute.mass': 'Масса',
        'parachute.area': 'Площадь купола',
        'parachute.diameter': 'Диаметр купола',
        'parachute.pmass': 'Масса парашюта',

        'planets.title': 'Расширяем горизонты: Марс и Титан',
        'planets.desc': 'Адаптация гибридной схемы для других тел Солнечной системы.',
        'planets.param': 'Параметр',
        'planets.earth': 'Земля',
        'planets.mars': 'Марс',
        'planets.titan': 'Титан',
        'planets.atm': 'Атмосфера',
        'planets.pressure': 'Давление',
        'planets.p1': '1 атм',
        'planets.p006': '0,006 атм',
        'planets.p15': '1,5 атм',
        'planets.speed': 'Скорость входа',
        'planets.heat': 'Тепловой поток',
        'planets.rad': 'Доля радиационного нагрева',
        'planets.mat': 'Материал аблятора',
        'planets.thabl': 'Толщина аблятора',
        'planets.thfpm': 'Толщина ФПМ',
        'planets.applic': 'Применимость гибрида',
        'planets.part': 'Частично',
        'planets.no': 'Нет',
        'planets.highlight': 'Теплозащита — не универсальная задача, а комплексная проблема, требующая индивидуального подхода для каждой планеты.',

        'conclusions.title': 'Выводы',
        'conclusions.c1': 'Чистый ФПМ непригоден для теплозащиты: масса 4,45–5,65 т, толщина 0,95–2,25 м. Поверхность раскаляется до 1900 °C.',
        'conclusions.c2': 'Абляционная защита эффективна по массе в 80–100 раз, но одноразова и создаёт техногенную нагрузку.',
        'conclusions.c3': 'Гибридная схема «аблятор + ФПМ-подслой» — оптимальное решение. Снижение толщины аблятора на 30–50%.',
        'conclusions.c4': 'Глауберова соль предпочтительнее парафина: объёмная плотность энергии в 2,4 раза выше.',
        'conclusions.c5': 'Экономическая выгода гибрида — около 1,1 млрд руб. за 10 полётов.',
        'conclusions.c6': 'Парашютная система: диаметр купола +31%, масса +72%.',
        'conclusions.c7': 'Методика применима для Марса и Титана, но требует адаптации под условия каждой атмосферы.',

        'perspectives.title': 'Перспективы развития',
        'perspectives.p1': 'Уточнение нестационарного расчёта с учётом разложения ФПМ и уноса массы',
        'perspectives.p2': 'Численное моделирование в ANSYS и COMSOL',
        'perspectives.p3': 'Экспериментальные испытания гибридной системы',
        'perspectives.p4': 'Исследование альтернативных фазопереходных материалов',
        'perspectives.p5': 'Разработка барьерного слоя и системы охлаждения',
        'perspectives.p6': 'Оценка ресурса ФПМ при многократных циклах',
        'perspectives.p7': 'Расчёт теплозащиты для Марса и Титана с помощью 3D-CFD',

        'doc.title': 'Текстовая работа',
        'doc.description': 'Полный текст исследовательского проекта доступен для скачивания на трёх языках.',
        'doc.ru': 'Русская версия',
        'doc.ruDesc': 'Полный текст проекта на русском языке',
        'doc.en': 'English version',
        'doc.enDesc': 'Full text of the project in English',
        'doc.de': 'Deutsche Version',
        'doc.deDesc': 'Vollständiger Projekttext auf Deutsch',
        'doc.docx': 'Редактируемая версия',
        'doc.docxDesc': 'Формат Word для внесения правок',
        'doc.pptx': 'Презентация',
        'doc.pptxDesc': 'Слайды для защиты проекта',
        'doc.download': 'Скачать',
        'doc.note': 'Для чтения PDF-версии можно использовать встроенный переводчик браузера или сервисы перевода документов.',

        'refs.title': 'Список литературы'
    },

    en: {
        'nav.actual': 'Relevance',
        'nav.goal': 'Goal',
        'nav.methods': 'Methods',
        'nav.results': 'Results',
        'nav.transient': 'Simulation',
        'nav.economy': 'Economics',
        'nav.planets': 'Planets',
        'nav.conclusions': 'Conclusions',
        'nav.document': 'Paper',
        'nav.perspectives': 'Outlook',
        'nav.refs': 'References',

        'hero.label': 'Research project',
        'hero.title': 'Comparative analysis of ablative and phase-change thermal protection for reusable re-entry vehicles',
        'hero.authorLabel': 'Author',
        'hero.author': 'Zubova Lada Vyacheslavovna',
        'hero.supervisorLabel': 'Supervisor',
        'hero.supervisor': 'Pimenova Violetta Vladimirovna',
        'hero.institutionLabel': 'Institution',
        'hero.institution': 'Gymnasium No. 2, Krasnogorsk, 2026',

        'actual.title': 'Relevance',
        'actual.p1': 'Ablative protection used on most modern re-entry vehicles irreversibly loses material on every descent. After each mission, the heat shield must be completely replaced — this increases cost and turnaround time.',
        'actual.p2': 'Phase-change materials (PCMs) are able to retain their mass through melt–solidify cycles, which makes them promising for reusable thermal protection systems. However, a systematic comparison of ablation and PCM under identical heat loads is scarce in open literature.',
        'actual.p3': 'This work fills that gap by offering a comparison methodology for early design stages.',

        'goal.title': 'Goal and objectives',
        'goal.lead': 'To quantitatively compare ablative and phase-change thermal protection by mass and thickness; to justify a hybrid scheme for reusable re-entry vehicles.',
        'goal.task1': 'Calculate the thermal energy acting on the shield',
        'goal.task2': 'Determine mass and thickness for PCM and ablator',
        'goal.task3': 'Perform a transient thermal simulation',
        'goal.task4': 'Assess the economic efficiency of the hybrid scheme',
        'goal.task5': 'Consider application for Mars and Titan',

        'methods.title': 'Calculation methods',
        'methods.f1': 'Total thermal energy',
        'methods.f2': 'PCM layer mass',
        'methods.f3': 'PCM layer thickness',
        'methods.f4': 'Ablator mass',
        'methods.f5': 'Volumetric energy density',
        'methods.scenario': 'Baseline scenario',
        'methods.scenarioDesc': 'Soyuz analogue, diameter ~2 m. Heat flux 1.2 MW/m², area 3.14 m², heating time 300 s.',
        'methods.energy': 'Absorbed energy: Q = 1.13 GJ',

        'results.title': 'Steady-state calculation results',
        'results.param': 'Parameter',
        'results.paraffin': 'Paraffin C24–C50',
        'results.salt': 'Na₂SO₄·10H₂O',
        'results.avcoat': 'AVCOAT ablator',
        'results.heat': 'Specific heat, kJ/kg',
        'results.density': 'Density, kg/m³',
        'results.ev': 'Volumetric energy density, MJ/m³',
        'results.mass': 'Mass, kg',
        'results.thickness': 'Thickness',
        'results.m225': '2.25 m',
        'results.m095': '0.95 m',
        'results.mm129': '12.9 mm',
        'results.reusable': 'Reusability',
        'results.yes': 'Yes',
        'results.cond': 'Conditional',
        'results.no': 'No',

        'transient.title': 'Transient thermal simulation',
        'transient.desc': 'Numerical solution of the heat equation with phase transition. Finite difference method, Python.',
        'transient.param': 'Parameter',
        'transient.paraffin': 'Paraffin',
        'transient.salt': 'Salt',
        'transient.depth': 'Melting depth',
        'transient.stat': 'Steady-state thickness',
        'transient.ratio': 'Ratio',
        'transient.r150': '150 times',
        'transient.r54': '54 times',
        'transient.temp': 'Surface temperature',
        'transient.highlight': 'In 300 s only 0.5–2% of the steady-state thickness will melt',
        'transient.caption': 'Temperature profile, melting depth and surface temperature',

        'economy.title': 'Economic assessment',
        'economy.desc': 'Cost comparison for 10 flights under conservative assumptions.',
        'economy.item': 'Cost item',
        'economy.ablative': 'Pure ablator',
        'economy.hybrid': 'Hybrid scheme',
        'economy.material': 'Ablator material',
        'economy.fpm': 'PCM material',
        'economy.service': 'Maintenance (9 cycles)',
        'economy.saving': 'Savings on launch mass',
        'economy.total': 'Total',
        'economy.highlight': 'Savings: ~1.1 billion RUB for 10 flights. For 30 flights — ~3.2 billion RUB.',

        'parachute.title': 'Impact on the parachute system',
        'parachute.desc': 'Canopy diameter is proportional to the square root of the vehicle mass.',
        'parachute.param': 'Parameter',
        'parachute.clean': 'Clean vehicle',
        'parachute.hybrid': 'With PCM sublayer',
        'parachute.change': 'Change',
        'parachute.mass': 'Mass',
        'parachute.area': 'Canopy area',
        'parachute.diameter': 'Canopy diameter',
        'parachute.pmass': 'Parachute mass',

        'planets.title': 'Expanding horizons: Mars and Titan',
        'planets.desc': 'Adaptation of the hybrid scheme to other Solar System bodies.',
        'planets.param': 'Parameter',
        'planets.earth': 'Earth',
        'planets.mars': 'Mars',
        'planets.titan': 'Titan',
        'planets.atm': 'Atmosphere',
        'planets.pressure': 'Pressure',
        'planets.p1': '1 atm',
        'planets.p006': '0.006 atm',
        'planets.p15': '1.5 atm',
        'planets.speed': 'Entry speed',
        'planets.heat': 'Heat flux',
        'planets.rad': 'Radiative heating share',
        'planets.mat': 'Ablator material',
        'planets.thabl': 'Ablator thickness',
        'planets.thfpm': 'PCM thickness',
        'planets.applic': 'Hybrid applicability',
        'planets.part': 'Partially',
        'planets.no': 'No',
        'planets.highlight': 'Thermal protection is not a universal task, but a complex problem requiring an individual approach for each planet.',

        'conclusions.title': 'Conclusions',
        'conclusions.c1': 'Pure PCM is unsuitable for thermal protection: mass 4.45–5.65 t, thickness 0.95–2.25 m. Surface heats up to 1900 °C.',
        'conclusions.c2': 'Ablative protection is 80–100 times more mass-efficient, but single-use and creates technogenic load.',
        'conclusions.c3': 'The hybrid scheme "ablator + PCM sublayer" is the optimal solution. Ablator thickness reduction by 30–50%.',
        'conclusions.c4': 'Glauber\'s salt is preferable to paraffin: volumetric energy density is 2.4 times higher.',
        'conclusions.c5': 'Economic benefit of the hybrid is about 1.1 billion RUB for 10 flights.',
        'conclusions.c6': 'Parachute system: canopy diameter +31%, mass +72%.',
        'conclusions.c7': 'The methodology is applicable to Mars and Titan, but requires adaptation to each atmosphere.',

        'perspectives.title': 'Future development',
        'perspectives.p1': 'Refinement of the transient simulation accounting for PCM decomposition and mass loss',
        'perspectives.p2': 'Numerical simulation in ANSYS and COMSOL',
        'perspectives.p3': 'Experimental testing of the hybrid system',
        'perspectives.p4': 'Study of alternative phase-change materials',
        'perspectives.p5': 'Development of barrier layer and cooling system',
        'perspectives.p6': 'Evaluation of PCM resource under multiple cycles',
        'perspectives.p7': 'Thermal protection calculation for Mars and Titan using 3D-CFD',

        'doc.title': 'Research paper',
        'doc.description': 'Full text of the research project is available for download in three languages.',
        'doc.ru': 'Русская версия',
        'doc.ruDesc': 'Full text of the project in Russian',
        'doc.en': 'English version',
        'doc.enDesc': 'Full text of the project in English',
        'doc.de': 'Deutsche Version',
        'doc.deDesc': 'Full text of the project in German',
        'doc.docx': 'Editable version',
        'doc.docxDesc': 'Word format for edits',
        'doc.pptx': 'Presentation',
        'doc.pptxDesc': 'Slides for project defense',
        'doc.download': 'Download',
        'doc.note': 'To read the PDF version, you can use the built-in browser translator or document translation services.',

        'refs.title': 'References'
    },

    de: {
        'nav.actual': 'Aktualität',
        'nav.goal': 'Ziel',
        'nav.methods': 'Methoden',
        'nav.results': 'Ergebnisse',
        'nav.transient': 'Berechnung',
        'nav.economy': 'Wirtschaft',
        'nav.planets': 'Planeten',
        'nav.conclusions': 'Schlussfolgerungen',
        'nav.document': 'Arbeit',
        'nav.perspectives': 'Perspektiven',
        'nav.refs': 'Literatur',

        'hero.label': 'Forschungsprojekt',
        'hero.title': 'Vergleichende Analyse des ablativen und Phasenwechsel-Wärmeschutzes für wiederverwendbare Landekapseln',
        'hero.authorLabel': 'Autorin',
        'hero.author': 'Subowa Lada Wjatscheslawowna',
        'hero.supervisorLabel': 'Wissenschaftliche Betreuerin',
        'hero.supervisor': 'Pimenowa Wioletta Wladimirowna',
        'hero.institutionLabel': 'Bildungseinrichtung',
        'hero.institution': 'Gymnasium Nr. 2, Krasnogorsk, 2026',

        'actual.title': 'Aktualität',
        'actual.p1': 'Der ablative Hitzeschutz, der bei den meisten modernen Landekapseln eingesetzt wird, verliert bei jedem Wiedereintritt unwiederbringlich Material. Nach jeder Mission muss der Hitzeschild vollständig ersetzt werden — dies erhöht die Kosten und die Vorbereitungszeit zwischen den Flügen.',
        'actual.p2': 'Phasenwechselmaterialien (PCM) können ihre Masse bei Schmelz-Erstarrungs-Zyklen erhalten, was sie für wiederverwendbare Wärmeschutzsysteme vielversprechend macht. Ein systematischer Vergleich von Ablation und PCM unter gleichen Wärmelasten ist in der offenen Literatur jedoch nur begrenzt vorhanden.',
        'actual.p3': 'Die vorliegende Arbeit schließt diese Lücke und bietet eine Vergleichsmethodik für frühe Entwurfsphasen.',

        'goal.title': 'Ziel und Aufgaben',
        'goal.lead': 'Quantitativer Vergleich des ablativen und Phasenwechsel-Wärmeschutzes nach Masse und Dicke; Begründung eines Hybridschemas für wiederverwendbare Landekapseln.',
        'goal.task1': 'Berechnung der auf den Hitzeschild wirkenden Wärmeenergie',
        'goal.task2': 'Bestimmung von Masse und Dicke für PCM und Ablator',
        'goal.task3': 'Durchführung einer instationären Wärmeberechnung',
        'goal.task4': 'Bewertung der Wirtschaftlichkeit des Hybridschemas',
        'goal.task5': 'Betrachtung der Anwendung für Mars und Titan',

        'methods.title': 'Berechnungsmethoden',
        'methods.f1': 'Gesamte Wärmeenergie',
        'methods.f2': 'Masse der PCM-Schicht',
        'methods.f3': 'Dicke der PCM-Schicht',
        'methods.f4': 'Masse des Ablators',
        'methods.f5': 'Volumetrische Energiedichte',
        'methods.scenario': 'Berechnungsszenario',
        'methods.scenarioDesc': 'Sojus-Analogon, Durchmesser ~2 m. Wärmestrom 1,2 MW/m², Fläche 3,14 m², Aufheizzeit 300 s.',
        'methods.energy': 'Absorbierte Energie: Q = 1,13 GJ',

        'results.title': 'Ergebnisse der stationären Berechnung',
        'results.param': 'Parameter',
        'results.paraffin': 'Paraffin C24–C50',
        'results.salt': 'Na₂SO₄·10H₂O',
        'results.avcoat': 'AVCOAT-Ablator',
        'results.heat': 'Spezifische Wärme, kJ/kg',
        'results.density': 'Dichte, kg/m³',
        'results.ev': 'Volumetrische Energiedichte, MJ/m³',
        'results.mass': 'Masse, kg',
        'results.thickness': 'Dicke',
        'results.m225': '2,25 m',
        'results.m095': '0,95 m',
        'results.mm129': '12,9 mm',
        'results.reusable': 'Wiederverwendbarkeit',
        'results.yes': 'Ja',
        'results.cond': 'Bedingt',
        'results.no': 'Nein',

        'transient.title': 'Instationäre Wärmeberechnung',
        'transient.desc': 'Numerische Lösung der Wärmeleitungsgleichung mit Phasenübergang. Finite-Differenzen-Methode, Python.',
        'transient.param': 'Parameter',
        'transient.paraffin': 'Paraffin',
        'transient.salt': 'Salz',
        'transient.depth': 'Schmelztiefe',
        'transient.stat': 'Stationäre Dicke',
        'transient.ratio': 'Verhältnis',
        'transient.r150': '150-mal',
        'transient.r54': '54-mal',
        'transient.temp': 'Oberflächentemperatur',
        'transient.highlight': 'In 300 s schmelzen nur 0,5–2 % der stationären Dicke',
        'transient.caption': 'Temperaturprofil, Schmelztiefe und Oberflächentemperatur',

        'economy.title': 'Wirtschaftliche Bewertung',
        'economy.desc': 'Kostenvergleich für 10 Flüge unter konservativen Annahmen.',
        'economy.item': 'Kostenposition',
        'economy.ablative': 'Reiner Ablator',
        'economy.hybrid': 'Hybridschema',
        'economy.material': 'Ablatormaterial',
        'economy.fpm': 'PCM-Material',
        'economy.service': 'Wartung (9 Zyklen)',
        'economy.saving': 'Einsparung bei der Startmasse',
        'economy.total': 'Gesamt',
        'economy.highlight': 'Einsparung: ~1,1 Mrd. RUB für 10 Flüge. Bei 30 Flügen — ~3,2 Mrd. RUB.',

        'parachute.title': 'Einfluss auf das Fallschirmsystem',
        'parachute.desc': 'Der Kappen durchmesser ist proportional zur Quadratwurzel der Kapselmasse.',
        'parachute.param': 'Parameter',
        'parachute.clean': 'Reine Kapsel',
        'parachute.hybrid': 'Mit PCM-Schicht',
        'parachute.change': 'Änderung',
        'parachute.mass': 'Masse',
        'parachute.area': 'Kappenfläche',
        'parachute.diameter': 'Kappendurchmesser',
        'parachute.pmass': 'Fallschirmmasse',

        'planets.title': 'Horizonte erweitern: Mars und Titan',
        'planets.desc': 'Anpassung des Hybridschemas an andere Körper des Sonnensystems.',
        'planets.param': 'Parameter',
        'planets.earth': 'Erde',
        'planets.mars': 'Mars',
        'planets.titan': 'Titan',
        'planets.atm': 'Atmosphäre',
        'planets.pressure': 'Druck',
        'planets.p1': '1 atm',
        'planets.p006': '0,006 atm',
        'planets.p15': '1,5 atm',
        'planets.speed': 'Eintrittsgeschwindigkeit',
        'planets.heat': 'Wärmestrom',
        'planets.rad': 'Anteil der Strahlungsheizung',
        'planets.mat': 'Ablatormaterial',
        'planets.thabl': 'Ablatordicke',
        'planets.thfpm': 'PCM-Dicke',
        'planets.applic': 'Anwendbarkeit des Hybrids',
        'planets.part': 'Teilweise',
        'planets.no': 'Nein',
        'planets.highlight': 'Wärmeschutz ist keine universelle Aufgabe, sondern ein komplexes Problem, das einen individuellen Ansatz für jeden Planeten erfordert.',

        'conclusions.title': 'Schlussfolgerungen',
        'conclusions.c1': 'Reines PCM ist für den Wärmeschutz ungeeignet: Masse 4,45–5,65 t, Dicke 0,95–2,25 m. Die Oberfläche erhitzt sich auf 1900 °C.',
        'conclusions.c2': 'Der ablative Hitzeschutz ist 80–100-mal masseneffizienter, aber einmalig und erzeugt technogene Belastung.',
        'conclusions.c3': 'Das Hybridschema „Ablator + PCM-Schicht" ist die optimale Lösung. Reduzierung der Ablatordicke um 30–50 %.',
        'conclusions.c4': 'Glaubersalz ist dem Paraffin vorzuziehen: Die volumetrische Energiedichte ist 2,4-mal höher.',
        'conclusions.c5': 'Der wirtschaftliche Vorteil des Hybrids beträgt etwa 1,1 Mrd. RUB für 10 Flüge.',
        'conclusions.c6': 'Fallschirmsystem: Kappendurchmesser +31 %, Masse +72 %.',
        'conclusions.c7': 'Die Methodik ist auf Mars und Titan anwendbar, erfordert jedoch eine Anpassung an die jeweilige Atmosphäre.',

        'perspectives.title': 'Entwicklungsperspektiven',
        'perspectives.p1': 'Verfeinerung der instationären Berechnung unter Berücksichtigung der PCM-Zersetzung und des Massenverlusts',
        'perspectives.p2': 'Numerische Simulation in ANSYS und COMSOL',
        'perspectives.p3': 'Experimentelle Tests des Hybridsystems',
        'perspectives.p4': 'Untersuchung alternativer Phasenwechselmaterialien',
        'perspectives.p5': 'Entwicklung einer Barriereschicht und eines Kühlsystems',
        'perspectives.p6': 'Bewertung der PCM-Ressource bei mehrfachen Zyklen',
        'perspectives.p7': 'Berechnung des Wärmeschutzes für Mars und Titan mit 3D-CFD',

        'doc.title': 'Textarbeit',
        'doc.description': 'Der vollständige Text des Forschungsprojekts steht in drei Sprachen zum Download bereit.',
        'doc.ru': 'Русская версия',
        'doc.ruDesc': 'Vollständiger Projekttext auf Russisch',
        'doc.en': 'English version',
        'doc.enDesc': 'Full text of the project in English',
        'doc.de': 'Deutsche Version',
        'doc.deDesc': 'Vollständiger Projekttext auf Deutsch',
        'doc.docx': 'Bearbeitbare Version',
        'doc.docxDesc': 'Word-Format für Änderungen',
        'doc.pptx': 'Präsentation',
        'doc.pptxDesc': 'Folien für die Projektverteidigung',
        'doc.download': 'Herunterladen',
        'doc.note': 'Zum Lesen der PDF-Version können Sie den integrierten Browser-Übersetzer oder Dokumentenübersetzungsdienste verwenden.',

        'refs.title': 'Literaturverzeichnis'
    }
};

// ==================== ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА ====================

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById('lang-' + lang);
    if (activeBtn) activeBtn.classList.add('active');

    localStorage.setItem('site-lang', lang);
}

document.getElementById('lang-ru').addEventListener('click', () => setLanguage('ru'));
document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-de').addEventListener('click', () => setLanguage('de'));

const savedLang = localStorage.getItem('site-lang') || 'ru';
setLanguage(savedLang);

// ==================== АНИМАЦИИ ====================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.08 });

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(section);
});

// ==================== ПОДСВЕТКА НАВИГАЦИИ ====================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + current
            ? '#eef2f8'
            : '#a8b4c8';
    });
});
// ==================== ПРОСМОТР ДОКУМЕНТОВ ====================

const documents = {
    ru: 'project-ru.pdf',
    en: 'project-en.pdf',
    de: 'project-de.pdf'
};

function switchDocument(lang) {
    const url = documents[lang];
    if (!url) return;

    const frame = document.getElementById('pdf-frame');
    if (frame) frame.src = url;

    document.querySelectorAll('.doc-tab').forEach(tab => {
        tab.classList.toggle('active', tab.getAttribute('data-lang') === lang);
    });
}

document.querySelectorAll('.doc-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        switchDocument(this.getAttribute('data-lang'));
    });
});
