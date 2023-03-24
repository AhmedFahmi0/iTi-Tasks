<?php

namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\File;

class StorePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "title"=> ['required','min:3','unique:posts,title,'.$this->post],
            "description" => ["required","min:10"],
            "user_id" => ['required|exists:users,id'],
            "image"=>[
                File::types(['png', 'jpg']),
            ]
            ];
    }


    public function messages(): array
{
    return [
        'title.required' => 'Title field must be filled.',
        'description.required' => 'Description field must be filled.',
    ];

}
}
