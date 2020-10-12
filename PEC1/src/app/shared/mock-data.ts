
export class MockData {
  public static readonly COLLEGE_CATEGORY = [
    { uid: 1, name: 'Grado' },
    { uid: 2, name: 'Diplomado' },
    { uid: 3, name: 'Licenciado' },
    { uid: 4, name: 'Ingeniero' },
    { uid: 5, name: 'Máster' },
    { uid: 6, name: 'Doctorado' }
  ];
  public static readonly VOCATIONAL_GRADES = [
    { uid: 1, name: 'Ciclo Formativo de Grado Medio' },
    { uid: 2, name: 'Ciclo Formativo de Grado Superior' }
  ];
  public static readonly TYPE_STUDIES = [
    { uid: 1, name: 'Ciclo formativo' },
    { uid: 2, name: 'Título Universitario' }
  ];
  public static readonly LANGUAGES_LEVEL = [
    { uid: 1, name: 'A1' },
    { uid: 2, name: 'A2' },
    { uid: 3, name: 'B1' },
    { uid: 4, name: 'B2' },
    { uid: 5, name: 'C1' },
    { uid: 6, name: 'C2' }
  ];
  public static readonly LANGUAGES_NAME = [
    { uid: 1, name: 'Inglés' },
    { uid: 2, name: 'Francés' },
    { uid: 3, name: 'Alemán' },
    { uid: 4, name: 'Español' },
    { uid: 5, name: 'Catalán' }
  ];

  public static readonly NATIONALITY = [
    { uid: 1, name: 'ES' },
    { uid: 2, name: 'FR' },
    { uid: 3, name: 'IT' },
    { uid: 4, name: 'PT' }
  ];

  public static readonly USERTYPES = [
    { uid: 1, name: 'tourist' },
    { uid: 2, name: 'company' },
  ]

  public static readonly ACTIVITY_CATEGORY = [
    { uid: 1, name: 'Cultura y patrimonio' },
    { uid: 2, name: 'Enoturismo' },
    { uid: 3, name: 'Playa' }
  ];

  public static readonly CULTURE_SUBCATEGORY = [
    { uid: 1, name: 'Concierto' },
    { uid: 2, name: 'Espectáculo' },
    { uid: 3, name: 'Excursión' },
    { uid: 4, name: 'Festivales' },
    { uid: 5, name: 'Visita guiada' },
    { uid: 5, name: 'Museo' },
    { uid: 5, name: 'Monumento' }
  ];

  public static readonly TURISM_SUBCATEGORY = [
    { uid: 1, name: 'Bodega' },
    { uid: 2, name: 'Cata de productos' },
    { uid: 3, name: 'Excursión' },
    { uid: 4, name: 'Museo del vino' },
    { uid: 5, name: 'Visita guiada' }
  ];

  public static readonly BEACH_SUBCATEGORY = [
    { uid: 1, name: 'Actividad náutica' },
    { uid: 2, name: 'Cala' },
    { uid: 3, name: 'Concierto' },
    { uid: 4, name: 'Excursión' },
    { uid: 5, name: 'Taller' }
  ];

  public static fakeIncreaseID<T>(collection, object: T): T {
    const _object = { ...object };
    const uid = collection[collection.length - 1].uid + 1;
    _object['uid'] = uid;
    return _object;
  }
}
