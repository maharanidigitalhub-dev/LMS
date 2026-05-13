export type Level = {
  id: string
  num: number
  label: string
  modules: number
  locked: boolean
  done: boolean
}

export type Lesson = {
  id: string
  moduleId: string
  title: string
  duration: string
  videoUrl?: string
  done: boolean
}

export type LessonProgress = {
  user_id: string
  lesson_id: string
  module_id: string
  completed: boolean
  completed_at: string | null
}

export type QuizResult = {
  user_id: string
  quiz_id: string
  score: number
  passed: boolean
  created_at: string
}

export type Profile = {
  id: string
  full_name: string
  email: string
  enrolled_at: string
}
