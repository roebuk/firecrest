import { useForm } from 'react-hook-form'
import { Race, useCreateRaceMutation } from '../graphql/types'
import { PrimaryButton } from '../components/button/button'

type FormData = {
  title: Race['title']
  price: number
}

export const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const [createRaceMutation, { data, loading, error }] = useCreateRaceMutation()

  const onSubmit = handleSubmit((data) =>
    createRaceMutation({ variables: { title: data.title } }),
  )

  console.log(data)

  return (
    <form onSubmit={onSubmit}>
      {error && <p>{error.message}</p>}
      {Object.keys(errors).length > 0 && (
        <p aria-live="polite" className="text-red-600">
          We detected errors:
        </p>
      )}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label htmlFor="event-name">Event name</label>
          <input
            id={'event-name'}
            className="border border-slate-400 rounded-md py-2 px-3 w-80 bg-white focus-visible:ring"
            aria-invalid={Boolean(errors.title)}
            type="text"
            {...register('title', {
              required: 'true',
              minLength: 6,
              maxLength: 400,
            })}
          />
          {errors.title && (
            <span className="text-red-600">
              {errors.title?.type === 'required' && 'A title is required'}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="event-name">Entry Price</label>
          <input
            id={'event-price'}
            className="border border-slate-400 rounded-md py-2 px-3 w-80 bg-white focus-visible:ring"
            aria-invalid={Boolean(errors.price)}
            type="text"
            {...register('price', {
              required: 'true',
              minLength: 6,
              maxLength: 400,
            })}
          />

          <span className="text-red-600">
            {errors.title &&
              errors.price?.type === 'required' &&
              'A title is required'}
          </span>
        </div>
      </div>

      <PrimaryButton type="submit" loading={loading}>
        Submit
      </PrimaryButton>
    </form>
  )
}
