let userString = prompt('Введи текст для обрезки')
let startSliceIndex = Number(
  prompt('Введи индекс, с которого нужно начать обрезку строки')
)

let endSliceIndex = Number(
  prompt('Введи индекс, которым нужно закончить обрезку строки')
)

userString = userString.trim()

//Проверка на ввод числовых индексов от юзера
if (startSliceIndex !== startSliceIndex && endSliceIndex !== endSliceIndex) {
  startSliceIndex = Number(prompt('Начальный индекс должен быть числом'))
  endSliceIndex = Number(prompt('Конечный индекс должен быть числом'))
} else if (startSliceIndex !== startSliceIndex) {
  startSliceIndex = Number(prompt('Начальный индекс должен быть числом'))
  console.log(startSliceIndex, typeof startSliceIndex)
} else if (endSliceIndex !== endSliceIndex) {
  endSliceIndex = Number(prompt('Конечный индекс должен быть числом'))
}
//..........................................................

alert(`Результат: ${userString.slice(startSliceIndex, endSliceIndex + 1)}`)
