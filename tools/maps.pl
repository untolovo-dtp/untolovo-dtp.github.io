#!/usr/bin/perl
use strict;

# run it from /
# tools/maps.pl


foreach my $year (qw(2016-2020 2016 2017 2018 2019 2020)) {
    foreach my $type (qw(all children deaths townsfolks motorists)) {

        my $page_title = $type eq 'all' ? "Карта ДТП МО Юнтолово в $year"
                        :  $type eq 'children' ? "Карта ДТП с детьми до 16 лет в МО Юнтолово в $year"
                        :  $type eq 'deaths' ? "Карта ДТП с погибшими в МО Юнтолово в $year"
                        :  $type eq 'townsfolks' ? "Карта ДТП с пострадавшими пешеходами в МО Юнтолово в $year"
                        : "Карта ДТП с пострадавшими без пешеходов в МО Юнтолово в $year";

        my $path = $type eq 'all' ? $year : "$year/$type";
        my $js = $type eq 'all' ? $year : "$year-$type";
        `mkdir -p $path`;

        my $data =<<"EOF";
---
title: $page_title
layout: map
---
<script src="/js/$js.js" type="text/javascript"></script>

EOF
        
        open my $fh,'>',"$path/index.html";
        print $fh $data;
        close $fh;

    }
}

