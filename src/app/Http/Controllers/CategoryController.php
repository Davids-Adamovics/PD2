<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class CategoryController extends Controller
{


    // display all Authors
    public function list(): View
    {
        $items = Category::orderBy('name', 'asc')->get();
        return view(
            'category.list',
            [
                'title' => 'Kategorijas',
                'items' => $items,
            ]
        );
    }

    // display new Author form
    public function create(): View
    {
        return view(
            'category.form',
            [
                'title' => 'Pievienot kategoriju',
                'category' => new Category()

            ]
        );
    }


    // create new Author
    public function put(Request $request): RedirectResponse
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
        ]);
        $category = new Category();
        $category->name = $validatedData['name'];
        $category->save();
        return redirect('/category');
    }

    // display category editing form
    public function update(Category $category): View
    {
        return view(
            'category.form',
            [
                'title' => 'Rediģēt kategoriju',
                'category' => $category
            ]
        );
    }

    // update existing Author data
    public function patch(Category $category, Request $request): RedirectResponse
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
        ]);
        $category->name = $validatedData['name'];
        $category->save();
        return redirect('/category');
    }

    public function delete(Category $category): RedirectResponse
    {
        // šeit derētu pārbaude, kas neļauj dzēst autoru, ja tas piesaistīts eksistējošām grāmatām
        $category->delete();
        return redirect('/category');
    }
}
