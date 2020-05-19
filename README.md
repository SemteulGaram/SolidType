# SolidType
🧱 Meticulous schema type restrictor for Javascript, Typescript object or JSON

## WIP

## Note
```
// Schema
{
  prop1: 'string',
  prop2: {
    type: 'string',
    optional: false,
    min: 0,
    max: 10,
    default: 'world!',
    invalidToDefault: true
    ignoreError: true
  },
  prop3: {
    type: 'array',
    optional: true,
    min: 0,
    max: 10,
    default: [],
    invalidToDefault: false,
    prop: 'number'
  },
  prop4: {
    type: 'array',
    prop: {
      type: 'int',
      min: -10,
      max: 0
    }
  },
  prop5: {
    type: 'object',
    props: {
      subProp1: 'number',
      subProp2: {
        type: 'boolean',
        default: true,
        invalidToDefault: true
      }
    }
  },
  prop6: {
    type: 'string',
    test: (v) => { return v.match(/^S.*/) }
  }
}

// Pass struct
{
  prop1: 'Hello,',
  prop2: 'world!',
  prop3: [1, 2, 3],
  prop4: [-1, -2, -3],
  prop5: {
    subProp1: 4,
    subProp2: true
  },
  prop6: SolidType
}
```
