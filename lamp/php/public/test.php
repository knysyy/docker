<?php

class Test
{

    public $title;

    function __construct($title)
    {
        $this->title = $title;
    }

    public function test()
    {
        echo $this->title;
    }
}
